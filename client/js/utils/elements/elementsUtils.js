export function createDivElementWithClass(className) {
    const div = document.createElement('div');
    div.className = className;
    return div;
}

export function createElementWithText(tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) {
        element.className = className;
    }
    return element;
}

export function appendElementsToParent(parent, ...elements) {
    elements.forEach(element => parent.appendChild(element));
}
