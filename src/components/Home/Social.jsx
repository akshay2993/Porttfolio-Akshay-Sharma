import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Social = () => {
  const social = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap
        .timeline()
        .from(".home__social--inner", { opacity: 0,left:'-500px', duration: 1, ease: "back" })
        .from(".home__social-icon", {
          x: "-500px",
          ease: "back",
          stagger: 0.1,
        });
    }, social);

    return () => ctx.revert();
  }, []);
  return (
    <div ref={social} className="home__social">
      <div className="home__social--inner">
        <a href="https://www.linkedin.com/in/akshay-sharmaaa/" className="home__social-icon" target="_blank">
          <i className="uil uil-linkedin"></i>
        </a>
        <a href="https://github.com/akshay2993" className="home__social-icon" target="_blank">
          <i className="uil uil-github"></i>
        </a>
        {/*<a href="" className="home__social-icon" target="_blank">
          <i className="uil uil-facebook-f"></i>
        </a>*/}
        <a href="https://www.instagram.com/akshay_01_/" className="home__social-icon" target="_blank">
          <i className="uil uil-instagram"></i>
        </a>
      </div>
    </div>
  );
};
export default Social;
