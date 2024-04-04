const googleMapsConfig = {
    key: "AIzaSyCuyIC7LIAjcuqlNb_9vGZ4XJn7TlN5j-g",
    v: "weekly",
    // Other Google Maps API parameters as needed
};

(function loadGoogleMapsApi(config) {
    const librariesToLoad = new Set(),
        urlSearchParams = new URLSearchParams();

    let apiLoadPromise = null;
    const callbackFunction = "initializeApplication";
    var globalObject = (window.google = window.google || {});
    globalObject.maps = globalObject.maps || {};

    function loadApi() {
        if (apiLoadPromise == null) {
            apiLoadPromise = new Promise(async (resolve, reject) => {
                var scriptElement = document.createElement("script");
                urlSearchParams.set("libraries", [...librariesToLoad] + "");
                for (var key in config)
                    urlSearchParams.set(key.replace(/[A-Z]/g, c => "_" + c.toLowerCase()), config[key]);
                urlSearchParams.set("callback", "google.maps." + callbackFunction);
                scriptElement.src = `https://maps.googleapis.com/maps/api/js?` + urlSearchParams;
                globalObject.maps[callbackFunction] = function () {
                    resolve();
                };
                scriptElement.onerror = function () {
                    apiLoadPromise = reject(Error("The Google Maps JavaScript API could not load."));
                };
                scriptElement.nonce = document.querySelector("script[nonce]")?.nonce || "";
                document.head.append(scriptElement);
            });
        }
        return apiLoadPromise;
    }

    if (!globalObject.maps.importLibrary) {
        globalObject.maps.importLibrary = function (lib, ...params) {
            librariesToLoad.add(lib);
            return loadApi().then(() => globalObject.maps.importLibrary(lib, ...params));
        };
    }
})(googleMapsConfig)