
//nav controller

const nav = document.querySelector('.nav');

const openBtn = document.querySelector('.bar');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click',(e) => {
    nav.style.visibility = 'visible';

    closeBtn.addEventListener('click', (e) => {
        nav.style.visibility = 'hidden';
 });

})






























console.log('webpack is working')

