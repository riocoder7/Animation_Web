const ti = gsap.timeline();

const all_Ani= ()=>{
    ti.from("#logo h1, #link h3, #btn",{
        y:"-100%",
        duration:0.5,
        delay:1,
        opacity:0,
        stagger:0.3
    
    });
    
    ti.from("#text h1",{
        y:"-100%",
        opacity:0,
        stagger:0.3
    
    })
    
    ti.from("#first img, #src img",{
        y:"-100%",
        opacity:0,
        stagger:0.2,
        yoyo:true,
    
    });
    
    ti.from("#scroll h2",{
        y:40,
        repeat:-1,
        yoyo:true,
    });
    ti.to("#src img",{
        x:60,
        y:-100,
        duration:5,
        repeat:-1,
        yoyo:true,
    
    })
    
    ti.to("#first img",{
        x:60,
        y:100,
        duration:5,
        repeat:-1,
        yoyo:true,
    
    })
};


all_Ani();
