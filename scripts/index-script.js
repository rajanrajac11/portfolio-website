window. addEventListener('scroll', function(){});
function toggleNavItems(selector){
    const button = document.querySelector(selector);
    if(!button.classList.contains('nav-link-active')){
        turnOffPreviousButton();
        button.classList.remove('nav-right-items');
        button.classList.add('nav-link-active');
    }
}
function turnOffPreviousButton(){
    const button = document.querySelector('.nav-link-active');
    button.classList.remove('nav-link-active');
    button.classList.add('nav-right-items')

}