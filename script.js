/** @type {import('tailwindcss')} */

const tabLink = document.querySelector('#tab-link');
const another = document.querySelector(".another")
let isClicked = false;

tabLink.addEventListener('click', (event) => {
    tabLink.classList.toggle("medium-tab-clicked")
    console.log(tabLink)
})