let previousTitle = document.title

window.addEventListener('blur', ()=>{
    previousTitle = document.title
    document.title = '¡No te vayas! ¡Vuelve! 😪  '
})

window.addEventListener('focus',()=>{
    document.title = previousTitle
})




document.addEventListener('DOMContentLoaded', () => {
    renderTextCopyrigh( );

});


const renderTextCopyrigh = () => {
    const year = new Date().getFullYear();
     const text = document.querySelector('#text-copyright');
 
 
     text.textContent = `© ${year} Made with love by Jafet Damian`;
 }