const marks = document.querySelectorAll('.body-list__item');

marks.forEach(mark => {
    mark.onclick = () => {
        mark.classList.toggle('hide-before');
    }
});