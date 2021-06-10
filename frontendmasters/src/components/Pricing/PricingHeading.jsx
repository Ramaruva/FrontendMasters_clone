import React from "react";
import styled from "styled-components";

const Head = styled.div`
  margin-left: auto;
  margin-right: auto;
  h1 {
    font-size: 46px;
    margin: 0 20px 10px;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0;
  }
  h2 {
    font-size: 31px;
    margin: 0 20px 30px;
    padding: 0;
    text-align: center;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 0;
  }
`;
const PricingHeading = () => {
  return (
    <div>
      <Head>
        <h1>Master Modern JavaScript to Full Stack</h1>
        <h2>
          100+ Courses, Learning Paths & Mobile Apps for "On the Go" Learning
          JavaScript
        </h2>
      </Head>
    </div>
  );
};

export default PricingHeading;
