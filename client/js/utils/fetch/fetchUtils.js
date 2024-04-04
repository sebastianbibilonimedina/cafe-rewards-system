export async function fetchData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Check if response is JSON
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            // If response is not JSON, return response text
            return await response.text();
        }
    } catch (error) {
        console.error('Could not fetch data:', error);
        return new Response(JSON.stringify({message: 'Could not fetch data', error: error.toString()}), {status: 500});
    }
}
