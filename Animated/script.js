function videoAnimation(){
var video = document.querySelector("#video-controller");
var play = document.querySelector("#play");
video.addEventListener("mousemove",function(){
    gsap.to(play,{
        scale:1,
        opacity:1
    })
})
video.addEventListener("mouseleave",function(){
    gsap.to(play,{
        scale:0,
        opacity:0
    })
})
video.addEventListener("mousemove",function(dets){
    gsap.to(play,{
        left:dets.x+"px",
        top:dets.y+"px"
    })
})
}
videoAnimation()


function loading(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// --- RED PANEL ---



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}


gsap.to("#left #link", {
    transform:"translateY(100%)",
    opacity:0,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 0",
        end: "top -5%",
        scrub: true,
    }}),
loading()

function LoadingAnimatioin(){
gsap.from("#page1 h1",{
    y:100,
    opacity:0,
    delay:0.5,
     duration:0.9,
    stagger:0.3

})
gsap.from("#page1 #video-controller",{
    scale:0.9,
    opacity:0,
    delay:1.3,
     //duration:0.2,
    

})
}
LoadingAnimatioin()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
var child1 = document.querySelector("#child1")
document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x+"px",
        top:dets.y+"px",
        
    }
    )
})
// child1.addEventListener("mouseenter",function(){
//     gsap.to("#cursor",{
//         scale:1
//     })
// })
// child1.addEventListener("mouseleave",function(){
//     gsap.to("#cursor",{
//         scale:0
//     })
// })

var a= document.querySelectorAll(".child")
a.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                scale:1
           })
        })
        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                scale:0
            })
        
})
})