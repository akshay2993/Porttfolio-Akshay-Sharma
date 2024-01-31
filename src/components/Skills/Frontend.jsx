import {
  Html,
  Css,
  Js,
  Bootstrap,
  Sass,
  React,
  Tailwind,
} from "../../assets/tech-stack/export";

const Frontend = () => {
  return (
    <div className="skills__content" data-aos="zoom-out-right">
      <h3 className="skills__title">Frontend Development</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Html} alt="" />
            </a>
          </div>

          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Bootstrap} alt="" />
            </a>
          </div>

          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Js} alt="" />
            </a>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Css} alt="" />
            </a>
          </div>

          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={React} alt="" />
            </a>
          </div>

          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Sass} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Frontend;
