///////////////////// IMAGE SLIDER //////////////////////////////////////
const prev = document.getElementById('prevBttn');
const next = document.getElementById('nextBttn');

const slider = document.querySelector('.image-slider');
const slide = document.querySelectorAll('.slide');

let index = 0;
let width = slide[index].clientWidth;

next.addEventListener('click', () => {
    index++;
    slider.style.transform = `translate(${-index * width}px)`;

    if (index === slide.length - 1) {
        next.classList.add('disable');
    } else {
        prev.classList.remove('disable');
    }
});

prev.addEventListener('click', () => {
    index--;
    slider.style.transform = `translate(${-index * width}px)`;

    if (index === 0) {
        prev.classList.add('disable');
    } else {
        next.classList.remove('disable');
    }

});

/////////////////////////////////////  PARALLAX EFFECT  ///////////////////////////////////////////////////
const trailer = document.getElementById("trailer");
const photo = document.getElementById('photo');
const border = document.getElementById('border');

window.onmousemove = e => {
    const x = e.clientX - trailer.offsetWidth / 2;
          y = e.clientY - trailer.offsetHeight / 2;

    const keyframes = {
       transform: `translate(${x}px, ${y}px)`,
       opacity: 1 
    }

    trailer.animate(keyframes, {
        duration: 700,
        fill: "forwards"
    });
}
photo.onmouseover = () => {
    border.style.transform = 'scale(1)';
    trailer.style.scale = '2';

}
photo.onmouseout = () => {
    border.style.transform = 'scale(.9)';
    trailer.style.scale = '1';
}

const text = document.querySelector(".text--container__text");
const myName = document.querySelector('.hero__name');
const bgPhoto = document.getElementById('bg-photo');
const projectSection = document.getElementById('projects');

window.addEventListener('scroll', () => {
    const scroll = window.scrollY / 5;
    
    let parallax = {
        marginLeft: `-${scroll}px`
    }
    myName.animate(parallax, {
        duration: 700,
        fill: 'forwards'
    })
    const dimension = photo.clientHeight * -3 + 'px';
    photo.style.height = dimension;
    
    let para = {
        backgroundPosition: `0 -${scroll}px`
    }   
    bgPhoto.animate(para, {
        duration: 200,
        fill: 'forwards'
    })

})

//////////////////////////// GALLERY ////////////////////////////////////
const track = document.getElementById('image-track');
const images = document.querySelectorAll('.images');
let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = track.scrollLeft;
    track.style.cursor = 'grabbing';
}
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    track.scrollLeft = prevScrollLeft - positionDiff;

}
const dragStop = () => {
    isDragStart = false;
    track.style.cursor = 'grab';
}
track.addEventListener('mousedown', dragStart);
track.addEventListener('mousemove', dragging);
track.addEventListener('mouseup', dragStop); 
  
////////////////////////////////////////////////////////////////////////////
var reveal = document.querySelectorAll('.reveal');
var section = document.getElementById('projects');

window.addEventListener('scroll', reveal);

for (var i = 0; i < reveal.length; i++) {

    var windowHeight = window.innerHeight;
    var revealTop = reveal[i].getBoundingClientRect().top;
    var revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
        reveal[i].classList.add('active');
        console.log('active');
    }
    else {
        reveal[i].classList.remove('active');
    }
}
