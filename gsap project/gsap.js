   let time1=gsap.timeline()
 
 time1.from(".nav,h2,h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.3
 })

 time1.from(".main h1",{
    x:-200,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.4

 })
 time1.from("img",{
    x:100,
    opacity:0,
    delay:0.4,
    duration:0.7,
    stagger:0.6,
    roatate:45
    
})
