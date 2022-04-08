import React from "react";
import constanceBio from "../../assets/cover/constance-bio.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Bio</h1>
      <img
        src={constanceBio}
        className="my-2"
        style={{ width: "12%" }}
        alt="cover"
      />
      <div className="my-2">
        <h2>
          In grade two, Constance was told by her teacher that her artwork was
          the equivalent of a grade six student, and to keep drawing and being
          creative... so she did!
        </h2>

        <p>
          Constance is an Registered Graphic Designer ("RGD") in Ontario,
          Canada. She has worked in creative professions for over 18 years. She
          has worked in marketing management, social media management,
          illustration, photography, and copywriting. She has also directed,
          wrote and produced an online commercial and tutorial for French brand,
          TecTecTec's ULT-G Satellite GPS Golf Watch.
        </p>
        <p>
          In addition to a three-year graphic design education from St. Clair
          College in Windsor, Ontario, most recently - she has almost completed
          a full-stack web development bootcamp with the University of Toronto.
        </p>
      </div>
    </section>
  );
}

export default About;
