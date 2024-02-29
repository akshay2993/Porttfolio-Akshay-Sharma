
import Frontend from "./Frontend";
import Backend from "./Backend";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <div data-aos="zoom-in-up" data-aos-duration="500">
        <h2 className="section__title">Skills</h2>
        <p className="section__subtitle">My technical Expertise</p>
      </div>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};
export default Skills;
