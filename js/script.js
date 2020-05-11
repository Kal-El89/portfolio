let burgerElement = document.getElementById('burg');
let menuElement = document.getElementById('men');

burgerElement.addEventListener('click', function(){
burgerElement.classList.toggle("active");
menuElement.classList.toggle("active");
})

