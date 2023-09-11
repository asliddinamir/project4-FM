const toggler = document.querySelector('.toggler');

toggler.addEventListener('click', () => {
    document.body.classList.toggle('dark_theme')
    console.log('Hi')
})