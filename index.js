const slides = document.querySelectorAll('.slide');
const container = document.querySelector('.container');
document.addEventListener('keydown', ({ key }) => keySelect(key));

for (const slide of slides) {
    slide.addEventListener('click', ({ target }) => clickSelect(target));
}

function clickSelect(target) {
    if (target.classList.contains('active')) {
        clearActiveClasses();
    } else {
        changeActiveClasses(target);
    };
}
function keySelect(key) {
    const isActive = (element) => element.classList.contains('active');
    let activeIndex;
    slides.forEach((slide, index) => { if (isActive(slide)) activeIndex = index });

    if (key === 'ArrowUp' || key === 'w') changeActiveClasses(slides[2]);
    if (activeIndex === undefined) {
        if (key === 'ArrowLeft'  || key === 'a') changeActiveClasses(slides[0]);
        if (key === 'ArrowRight' || key === 'd') changeActiveClasses(slides[slides.length - 1]);
    } else {
        if (key === 'ArrowDown' || key === 's') clearActiveClasses();
        if (key === 'ArrowRight' || key === 'd') {
            if (activeIndex === slides.length - 1) {
                changeActiveClasses(slides[0]);
            } else {
                changeActiveClasses(slides[activeIndex + 1]);
            }
        }
        if (key === 'ArrowLeft' || key === 'a') {
            if (activeIndex === 0) {
                changeActiveClasses(slides[slides.length - 1]);
            } else {
                changeActiveClasses(slides[activeIndex - 1]);
            }
        }; 
    }
}
function changeActiveClasses(target) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
        slide.classList.add('inactive')
    })
    target.classList.toggle('inactive')
    target.classList.toggle('active')
}
function clearActiveClasses() {
    slides.forEach((slide) => slide.classList.remove('inactive'));
    slides.forEach((slide) => slide.classList.remove('active'));
}
