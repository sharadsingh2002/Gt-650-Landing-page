let bluebike = document.querySelector('#blue');
let redbike = document.querySelector('#red');
let silverbike = document.querySelector('#silver');
let body = document.querySelector('body')

let bluetanki = document.querySelector('#bluetanki');
let redtanki = document.querySelector('#redtanki');
let silvertanki = document.querySelector('#silvertanki');


redtanki.addEventListener('click',function(){
    redbike.style.display = "block"
    bluebike.style.display = 'none'
    silverbike.style.display = 'none'
    body.style.background = ' radial-gradient(ellipse at center,#ce9999 , #bd383f)';
    tl.from('#red',{
        y:-80,
        opacity:0,
        duration:0.7,
        delay:0.1,
        stagger: 1
    })
    
   
})

silvertanki.addEventListener('click',function(){

    redbike.style.display = "none"
    bluebike.style.display = 'none'
    silverbike.style.display = 'block'
    body.style.background = 'radial-gradient(ellipse at center,#8d9193 , #373634)';
    tl.from('#silver',{
        y: -80,
        opacity:0,
        duration:0.7,
        delay:0.1,
        stagger: 1
    })
})

bluetanki.addEventListener('click',function(){

    redbike.style.display = "none"
    bluebike.style.display = 'block'
    silverbike.style.display = 'none'
    body.style.background = 'radial-gradient(ellipse at center,#79CDE8 , #3c5f94)';
    tl.from('#blue',{
        y: -80,
        opacity:0,
        duration:0.7,
        delay:0.1,
        stagger: 1
    })
    
    
})


// ---------------Gsap----------------



let tl =  gsap.timeline()
let t2 =  gsap.timeline()

tl.from('h1',{

    y:30,
    opacity:0,
    duration:0.5,
    delay:0.1
})
tl.from('span',{
    y:30,
    opacity:0,
    duration:0.6,
    delay:0.1,
})
tl.from('p',{
    x: 80,
    opacity:0,
    duration:0.5,
    delay:0.1,
})
tl.from('button',{
    x: -80,
    opacity:0,
    duration:0.3,
    delay:0.1,
})
tl.from('#blue',{
    y: -80,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger: 1
})

t2.from('.bluetankibox',{
    y: 50,
    opacity:0,
    duration:0.5,
    delay:3,
    stagger: 1
})
t2.from('.redtankibox',{
    y: 50,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger: 1
})

t2.from('.silvertankibox',{
    y: 50,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger: 1
})


