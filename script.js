let text = document.getElementById('text');
let left = document.getElementById('left');
let right = document.getElementById('right');
let centre = document.getElementById('centre');

window.addEventListener('scroll', () => { 
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    left.style.marginLeft = value * -1.5 + 'px';
    right.style.marginLeft = value * 1.5 + 'px';
    centre.style.marginTop = value * 2.5 + 'px';
})
