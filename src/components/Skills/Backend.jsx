import { NodeJs, Express, Git, Github, Mongodb, Npm, Postman } from "../../assets/tech-stack/export";

const Backend = () => {
  return (
    <div className="skills__content" data-aos="zoom-out-left">
      <h3 className="skills__title">Backend & Others</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={NodeJs} alt="" />
            </a>
          </div>

          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Express} alt="" />
            </a>
          </div>

          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Git} alt="" />
            </a>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Npm} alt="" />
            </a>
          </div>
          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Mongodb} alt="" />
            </a>
          </div>
          <div className="skills__data">
            {/*<i className="bx bx-badge-check"></i>*/}

            <a className="skills__image">
              <img src={Github} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Backend;
