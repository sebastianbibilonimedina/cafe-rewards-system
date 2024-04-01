const stackItems = document.querySelectorAll('.stack--item');
let maxIndex = stackItems.length - 1;
stackItems.forEach((card, index) => {
    card.addEventListener('click', () => {
        let nextIndex = index != maxIndex ? index + 1 : 0;

        card.classList.toggle('out-animation');
        setTimeout(() => {
            card.classList.toggle('out-animation');
        }, 400);
        card.classList.toggle('show');
        stackItems[nextIndex].classList.toggle('show');
    });
});