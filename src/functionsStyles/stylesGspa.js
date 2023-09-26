import { gsap } from "gsap";
function encourage(name) {
    gsap.to(name, {
      display:"block",
      scale: 1.4,
      filter:"blur()",
    });
  }
  function discourage(name) {
    gsap.to(name, {
      scale: 1,
      display:"none",
      ease:"Power1.easeInOut",
      filter:"blur(1px)"
    });
  }
  function encourage2(name){
    gsap.to(name,{scale:1.5,filter:"saturate(150%)",ease:"back.out"})
  }
  function discourage2(name){
    gsap.to(name,{scale:1,filter:"saturate(100%)"})
  }
export{encourage,encourage2,discourage,discourage2}