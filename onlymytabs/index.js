let button_open = document.querySelector('#button__open');
let outer = document.querySelector('.modal__outer');
let inner = document.querySelector('.modal__inner');
let nav = document.querySelectorAll('#tab')
let contents = document.querySelectorAll('[data-content-active]');
let next = document.querySelector('#next');
let back = document.querySelector('#back');


button_open.onclick = () => {
    outer.classList.toggle('show');
}

outer.onclick = () => {
    outer.classList.toggle('show');
}

inner.onclick = (event) => {
    event.stopPropagation();
    outer.classList.add('show');
}
document.querySelectorAll('#pay').forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

contents.forEach((i) => {i.classList.add('display_none')});
console.log(nav)
console.log(next)
nav.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        console.log(element);
        contents.forEach((i) => {i.classList.add('display_none')});
        let target = event.currentTarget;
        let content = document.querySelector(`[data-content-active="${target.dataset.active}"]`);
        next.onclick = () => {
            let a = content.nextElementSibling;
            console.log(a)
        }
        back.onclick = () => {
            let b = content.previousElementSibling;
            console.log(b)
            content.classList.remove('display_none')
        }
        content.classList.remove('display_none');
    })
})