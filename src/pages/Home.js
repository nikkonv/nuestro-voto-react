import React from "react";
import styled from "styled-components";
import Typical from "react-typical";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.png";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Wrapper = styled.div`
  display: block;
  float: inherit;
  justify-content: center;
  align-items: flex-start;
  height: 90vh;
  margin-top: 20px;

  .text-primary {
    color: var(--primary);
  }
  .sliderWrapper {
    position: relative;
    width: 45%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
  .info {
    margin-top: 20px;
    position: relative;
    text-align: center;
  }
  @media screen and (max-width: 960px) {
    .sliderWrapper {
      width: 70%;
    }
    .info {
      font-size: 0.8rem;
    }
  }
`;

function Home() {
  return (
    <Wrapper>
      <div className="sliderWrapper">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={2000}
          bullets={false}
        >
          <div data-src={image1} />
          <div data-src={image2} />
        </AutoplaySlider>
      </div>

      <div className="info">
        <h1>
          Hacemos que votar sea{" "}
          <span className="text-primary">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "sencillo",
                1500,
                "confiable",
                1500,
                "seguro",
                1500,
                // "A un precio justo",
                // 1000,
              ]}
            />
          </span>
        </h1>
      </div>
    </Wrapper>
  );
}

export default Home;
