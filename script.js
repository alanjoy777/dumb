var dl=gsap.timeline()

dl.from("h2",{
    y:-20,
    duration:1,
    delay:0.5,
    opacity:0
})

dl.from("h4",{
    y:-20,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.1
})

dl.from("h1",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2
})

dl.from("img",{
    y:60,
    x:-100,
    opacity:0,
    duration:1,
    scale:1
})


// gsap.to("#box1",{
//     x:1330,
//     duration:2,
//     delay:1,
//      rotate:360,
//     // backgroundColor:" rgb(133, 144, 214)",
//     // borderRadius:"50%",
//     // scale:0.5,
//     // repeat:1,
//     // yoyo:true
// })