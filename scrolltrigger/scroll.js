gsap.from("#page-1,.circle",{
    opacity:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page-1,.circle",
        scroller:"body",
        scrollTrigger:{
            trigger:"#page-1,.circle",
            scroller:"body",
            markers:"true",
            start:"top-60%",
            end:"top 70%",
            scrub:true,

    }
}
    })
gsap.from("#page-2,.circle2",{
    opacity:0,
    duration:2,
    delay:1,
    rotate:360,
    scrollTrigger:{
        trigger:"#page-2,.circle2",
        scroller:"body",
        markers:"true",
        start:"top-60%",
        end:"top 70%",
        scrub:true


}
})
gsap.from("#page-3,.circle3",{
    opacity:0,
    duration:2,
    delay:1,
    rotate:360

})