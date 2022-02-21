let background = document.getElementById('background');
let screenwidth = window.innerWidth;
let openButton = document.getElementById('open-button');
let closeButton = document.getElementById('close-button');
let menu = document.getElementById("menu");
let TechImg = document.getElementById("tech-img");

if(screenwidth >= 1440){
    background.classList.add('destination-full-background-desktop');
}else if(screenwidth >= 768){
    background.classList.remove('destination-full-background-desktop');
    background.classList.add('destination-full-background-tablet');
    TechImg.classList.add("Technology-full-background-tablet");

}else{
    background.classList.remove('destination-full-background-tablet');
    background.classList.add('destination-full-background-mobile');
    TechImg.classList.add("Technology-full-background-mobile");
}

openButton.addEventListener('click' , function(){
    menu.classList.remove('close-menu')
    menu.classList.add('open-menu')
    // console.log("Hello World");
});

closeButton.addEventListener('click' , function(){
    menu.classList.remove('open-menu')
    menu.classList.add('close-menu')
})