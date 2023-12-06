const t1 = gsap.timeline();


t1.from("nav #logo, nav #link",{
    y:"-150%",
    duration:0.7,
    
    stagger:0.5,
    opacity:0

});

t1.from(" nav #link h1",{
    y:"-150%",
    duration:0.5,
    
    stagger:0.5,
    opacity:0

});

t1.from(" nav #btn button",{
    y:"-150%",
    duration:0.5,
    
    stagger:0.5,
    opacity:0

});

t1.from("#page1 #left h1",{
    x:"-150%",
    duration:0.5,
    stagger:0.3,
    opacity:0

});


t1.from("#page1 #right img",{
    scale:3,
    duration:0.5,
    stagger:0.3,
    opacity:0

});
t1.to("#page1 #right img",{
    y:-100,
    x:100,
    duration:1,
    delay:1,
    stagger:0.3,
    opacity:0,
    repeat:-1,
    yoyo:true

});

t1.from("#page1 #two_box #one",{
    y:100,
    x:-400,
    duration:0.5,
    stagger:0.3,
    opacity:0

});
    
t1.to("#page1 #two_box #one",{
   
    scrollTrigger:{
        trigger:"#page1 #two_box #one",
        scroller:"body"
    },
    x:500,
    duration:2,
    delay:1,
    stagger:0.3,
    // rotate:360,
    // opacity:0,
    repeat:-1,
    yoyo:true,

});


t1.from("#page1 #two_box #two",{
    y:100,
    x:400,
    duration:0.5,
    stagger:0.3,
    opacity:0

});


    
t1.to("#page1 #two_box #two",{
    x:-400,
    duration:2,
    delay:1,
    stagger:0.3,
    // rotate:360,
    opacity:0,
    repeat:-1,
    yoyo:true,

});


t1.from("#page2  .one, #page2 .one",{
    y:-100,
    x:400,
    duration:0.5,
    stagger:0.3,
    opacity:0

});


t1.from("#page2  .two, #page2 .two",{
    y:100,
    x:400,
    duration:0.5,
    stagger:0.3,
    opacity:0

});
