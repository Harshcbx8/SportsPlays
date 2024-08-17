var crsr = document.querySelector("#cursor")
var blurcrsr = document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
   crsr.style.left = dets.x+30+"px"
   crsr.style.top = dets.y+"px"
   blurcrsr.style.left = dets.x-175+"px"
   blurcrsr.style.top = dets.y-175+"px"
})

var h4all = document.querySelectorAll("#nav a")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
})
h4all.forEach(function(elem){
elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1
    crsr.style.border="0px solid rgba(116, 255, 128, 0.76)"
    crsr.style.backgroundColor = "rgba(116, 255, 128, 0.76)"
})
})



gsap.to("#nav",{
  backgroundColor :"#000",
  height:"60px",
  duration:0.5,
  scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:"true",
    start:"top -10%",
    end:"top -11%",
    scrub:1

  }
})
gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    // markers:true,
    start:"top -40%",
    end:"top -100%",
    scrub:2,

  }

})
gsap.from("#about img,#abus",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 58%",
        scrub:2
    }

})
gsap.from(".cards",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.1,
  scrollTrigger:{
      trigger:".card",
      scroller:"body",
      // markers:true,
      start:"top 80%",
      end:"top 90%",
      scrub:2
  }
})       
gsap.from("#page3 #upcoma",{
   y:-70,
   x:-70,
   scrollTrigger:{
    trigger:"#upcoma",
    scroller:"body",
    // markers:true,
    start:"top 55%",
    end:"top 45%",
    scrub:4
   }
} )
gsap.from("#page3 #downcoma",{
  y:70,
  x:70,
  scrollTrigger:{
   trigger:"#downcoma",
   scroller:"body",
  //  markers:true,
   start:"top 100%",
   end:"top 100%",
   scrub:4
  }
} )
gsap.from("#page4 h1",{
  y:100,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
   //  markers:true,
    start:"top 85%",
    end:"top 70%",
    scrub:2
   }


})