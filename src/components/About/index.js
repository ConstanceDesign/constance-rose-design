import React from "react";
import constanceBio from "../../assets/cover/constance-bio.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Bio</h1>
      <img
        src={constanceBio}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          In grade two, Constance was pulled aside by her teacher and told that
          her artwork was the equivialnt to a grade six, and that she should
          keep drawing and being creative... and so she did!
        </p>

        <p>
          Constance is an RGD ("Registered Graphic Designer") in Ontario,
          Canada. She has worked in creative professions for over 18 years. In
          addition to a three-year graphic design education from St. Clair
          College in Windsor, and most recently - a full-stack web development
          bootcamp with the University of Toronto. She has worked in marketing
          management, social media management, illustration, photography, and
          copywriting. She has also directed, wrote and produced an online
          commercial and tutorial for TecTecTec's ULT-G Satellite GPS Golf
          Watch.
        </p>
      </div>
    </section>
  );
}

export default About;
