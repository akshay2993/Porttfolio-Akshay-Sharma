import { useState } from "react";
import "./Qualification.css";

const Qualification = () => {
  const [showQualifications, setShowQualifications] = useState(1);

  const toggleTab = (index) => {
    setShowQualifications(index);
    console.log("chANGE", index)
  };
  return (
    <div className="section qualification">
      <div data-aos="zoom-in-up" data-aos-duration="500">
        <h2 className="section__title">Qualification</h2>
        <p className="section__subtitle">My Personal Journey</p>
      </div>

      <div className="container qualification__container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification-active"
            onClick={() => {
              toggleTab(1);
            }}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className="qualification__button button--flex"
            onClick={() => {
              toggleTab(2);
            }}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              showQualifications === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Technology (CSE)</h3>
                <span className="qualification__subtitle">Jaypee University of Information Technology</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> July, 2015 - June, 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/*<div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
          </div>*/}
          </div>

          <div
            className={
              showQualifications === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front-End Web Developer</h3>
                <span className="qualification__subtitle">WebThreex</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> June, 2022 - Oct, 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            {/*<div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">UX Designer</h3>
                <span className="qualification__subtitle">Apple Inc.</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Product Manager</h3>
                <span className="qualification__subtitle">Google</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
          </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Qualification;
