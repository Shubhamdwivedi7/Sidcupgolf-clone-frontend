
//here in this webpage we are using GSAP a javascript library to make animations in our webpage
//here is the basic implementation of GSAP

//|||||||||||||||||||||||||||||||||||||||||
//vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
// gsap.to("selector",{
//     properties,based on conditions,
//     duration
//     scrollTrigger : {
//         trigger : "selector",
//         scroller: "the part of the body to be scrolled then the following properties will applied",
//         markers: "value between 1 - 5 or true/false to show the start and the end point",
//         start: "from where to start the implementing the properties",
//         end: "where to end implementing the properties",
//         scrub: "to make look the transistions smooth ; value : true/false or 1 - 5"
//     }
// })



//event handler for the cursor :

var cursor = document.getElementById("cursor");
var blur = document.getElementById("cursor-bl");

document.addEventListener("mousemove",function(dets){
    // console.log(dets);
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 100 + "px";
    blur.style.top = dets.y - 100 + "px";
})

var h4all = document.querySelectorAll("#nav h4");
//event listener to change the background color and size of the cursor on hovering above the navbar :

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cursor.style.background = "transparent";
        cursor.style.border = "1px solid white";
        cursor.style.scale = 2
    })

    elem.addEventListener("mouseleave",function(){
        cursor.style.backgroundColor = "rgb(174, 240, 74)";
        cursor.style.border = "0px";
        cursor.style.scale = 1;
    })
})

//ANIMATTION FOR THE NAVBAR :
gsap.to("#nav",{
    backgroundColor : "black",
    duration: 0.5,
    height: "90px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        start:"top -10%",
        // markers: true,
        end: "bottom -11%",
        scrub:1
    }
})

// ANIMATION FOR THE MAIN PART OF THE WEBPAGE :
gsap.to(".main",{
    backgroundColor:"black",
    // duration: 0.5,
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start : "top -30%",
        end : "top -60%",
        scrub: 3
    }
})

// ANIMATION FOR THE ABOUT US SECTION IN THE PAGE 2 :
// gsap.to(".about-us",{
//     padding: "25px",
//     scrollTrigger : {
//         trigger: ".about-us",
//         scroller: "body",
//         start: "top -10%",
//         end : "top -60%",
//         scrub : 3
//     }
// })

gsap.from(".about-us .left , .mid, .right",{
    // y:50,
    // scale: 0.8,
    opacity: 0,
    duration:1,
    // height: "40vh",
    // stagger : 0.4,
    scrollTrigger : {
        trigger: ".about-us",
        scroller: "body",
        // markers : true,
        start: "top 70%",
        end : "top 55%",
        scrub: 3
    },
})

gsap.from(".carousels .left-1,.mid-1,.right-1",{
    // y:50,
    scale: 0.8,
    opacity: 0,
    duration:3,
    // height: "40vh",
    stagger : 0.4,
    scrollTrigger : {
        trigger: ".about-us",
        scroller: "body",
        // markers : true,
        start: "top 60%",
        end : "top 55%",
        scrub: 3
    },
})


gsap.to(".text #img1",{
    x: 75,
    y: 95,
    scrollTrigger : {
        trigger : ".text",
        scroller: "body",
        start : "top 60%",
        end : "top 70",
        scrub: 2
    }
})

gsap.to(".text #img2",{
    x: -90,
    y: -95,
    duration: 1,
    scrollTrigger : {
        trigger : ".text",
        scroller: "body",
        start : "top 60%",
        end : "top 70",
        scrub: 4
    }
})


gsap.from(".page4 h4", {
    y:150,
    duration: 1,
    scrollTrigger : {
        trigger : ".page4 h4",
        scroller: "body",
        start : "top 70%",
        end: "top 70%",
        scrub : 3
    }

})