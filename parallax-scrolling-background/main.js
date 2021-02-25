const translate = document.querySelectorAll('.translate');
const background_title = document.querySelector('.bg__title');
const header = document.querySelector('.header');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.content');
const section = document.querySelector('section');
const small_img = document.querySelector('.imgSmall');
const opacity = document.querySelectorAll('.opacity');

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () =>{
    let scroll = window.pageYOffset;
    let sectionY = section.getBoundingClientRect();

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });

    opacity.forEach(element =>{
        element.style.opacity = scroll / (sectionY.top + section_height);
    })

    background_title.style.opacity = -scroll / (header_height / 2) + 1;
    shadow.style.height = `{scroll * 0.5 + 300}px`;
    content.style.transform  =  `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;
    small_img.style.transform  =  `translateY(${scroll / (section_height + sectionY.top) * - 50 + 50}px)`;
})

