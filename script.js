var cursorblur=document.querySelector("#cursorblur")
document.addEventListener("mousemove",function(dets){
    cursorblur.style.left=dets.x - 200+ "px"
    cursorblur.style.top=dets.y -200 + "px"
})



var cursor=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    cursor.style.left=dets.x -12.5 +"px"
    cursor.style.top=dets.y -12.5 +"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.scale=3
        cursor.style.border = "1px solid #fff"
        cursor.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        cursor.style.scale=1
        cursor.style.border = "0px solid #fff"
        cursor.style.backgroundColor = "#95C11E"
    })
})
gsap.to("#nav",{
    backgroundColor : "black",
    duration : 0.5,
    height:"105px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:0.8,
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //markers:true,
        start: "top -35%",
        end:"top -100%",
        scrub:1.5,
    }
})
gsap.from("#aboutus img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1,
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers:true,
//         start:"top 70%",
//         end:"top 65%",
//         scrub:1,
//     }
// })
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        start:"top 95%",
        end:"top 45%",
        scrub:3,
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})
// setTimeout(function() {
//     document.getElementsByClassName('card').style.display="block";
// },2000)
// setTimeout(function() {
//     document.getElementsByClassName('overlay').style.display="block";
// },2000)
