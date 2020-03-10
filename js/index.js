// Your code goes here

const All = document.querySelector('body');
All.addEventListener('contextmenu', (event) => {All.style.backgroundColor = "lightgray"});
All.addEventListener('wheel', (event) => {All.style.backgroundColor = "lightblue"});

// Nav

const NavBar = document.querySelector('.main-navigation');

const Logo = document.querySelector('.logo-heading');
Logo.addEventListener('mouseover', (event) => {Logo.style.color = "red"});
Logo.addEventListener('mouseout', (event) => {Logo.style.color = "black"});
Logo.addEventListener('dblclick', (event) => {Logo.style.fontSize = "6rem"});

const navLink = document.querySelector('a:nth-of-type(1)');
navLink.addEventListener('click', (event) => {navLink.style.color = "blue"; event.preventDefault();});
const navLink2 = document.querySelector('a:nth-of-type(2)');
navLink2.addEventListener('click', (event) => {navLink2.style.color = "blue"; event.preventDefault();});
const navLink3 = document.querySelector('a:nth-of-type(3)');
navLink3.addEventListener('click', (event) => {navLink3.style.color = "blue"; event.preventDefault();});
const navLink4 = document.querySelector('a:nth-of-type(4)');
navLink4.addEventListener('click', (event) => {navLink4.style.color = "blue"; event.preventDefault();});

// Body

const IntroPar = document.querySelector('.intro p');
IntroPar.addEventListener('click', (event) => {IntroPar.style.color = "goldenrod"; event.stopPropagation();});

const Introduction = document.querySelector('.intro');
Introduction.addEventListener('click', (event => {Introduction.style.backgroundColor = "blue"}));

const IntroHeader = document.querySelector('.intro h2');
IntroHeader.addEventListener('click', (event) => {gsap.to(IntroHeader, {duration: 3, rotationX: 360});})

const Image1 = document.querySelector('.img-content:nth-of-type(1)');
Image1.addEventListener('drag', (event) => {Image1.style.opacity = ".5"});
Image1.addEventListener('dragend', (event) => {Image1.style.opacity = "1"});

const Image2 = document.querySelector('.img-content:nth-of-type(2)');
Image2.addEventListener('drag', (event) => {Image2.style.opacity = ".5"});
Image2.addEventListener('dragend', (event) => {Image2.style.opacity = "1"});

// Button

const Button1 = document.querySelector('.destination:nth-of-type(1) .btn');
Button1.addEventListener('mousedown', (event) => {Button1.style.backgroundColor = "yellow"});
Button1.addEventListener('mouseup', (event) => {Button1.style.backgroundColor = "blue"});

const Button2 = document.querySelector('.destination:nth-of-type(2) .btn');
Button2.addEventListener('mousedown', (event) => {Button2.style.backgroundColor = "yellow"});
Button2.addEventListener('mouseup', (event) => {Button2.style.backgroundColor = "blue"});

const Button3 = document.querySelector('.destination:nth-of-type(3) .btn');
Button3.addEventListener('mousedown', (event) => {Button3.style.backgroundColor = "yellow"});
Button3.addEventListener('mouseup', (event) => {Button3.style.backgroundColor = "blue"});

// Footer

const FooterText = document.querySelector('.footer p');
FooterText.addEventListener('click', (event) => {FooterText.style.color = "goldenrod"; event.stopPropagation();});

const Footer = document.querySelector('.footer');
Footer.addEventListener('click', (event => {Footer.style.backgroundColor = "blue"}));