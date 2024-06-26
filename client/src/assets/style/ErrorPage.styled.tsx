import styled, { css } from "styled-components";

import casablanca from "../images/casablanca.webp";
import onceAmerica from "../images/onceAmerica.jpg";
import toyStory from "../images/toyStory.webp";
import trainingDay from "../images/training.jpg";
import wonderfulLife from "../images/wonderfulLife.jpg";
import { devices, primaryColor, secondaryColor } from "./GlobalStyles";

const commonStyles = css`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  padding: 30px;

  @media ${devices.mobile} {
    padding: 10px;
  }

  > article {
    background-color: rgba(0, 0, 0, 0.8);
    width: max-content;

    padding: 25px 40px;

    @media ${devices.mobile} {
      width: 300px;

      padding: 15px;
    }
  }

  img {
    display: block;
    height: 65px;

    margin: 0 auto 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;

    span {
      color: ${primaryColor};
    }

    a {
      color: ${secondaryColor};
      transition: all 200ms ease;

      &:hover {
        color: #8146c5;
      }
    }
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;

    margin: 1rem 0;

    a {
      color: ${secondaryColor};
      transition: all 200ms ease;

      &:hover {
        color: #8146c5;
      }
    }
  }

  h4 {
    color: ${secondaryColor};
  }
`;

export const ErrorPageCasablanca = styled.section`
  ${commonStyles};
  background: url(${casablanca}) center/cover no-repeat;
`;

export const ErrorPageAmerica = styled.section`
  ${commonStyles};
  background: url(${onceAmerica}) center/cover no-repeat;
`;

export const ErrorPageWonderfulLife = styled.section`
  ${commonStyles};
  background: url(${wonderfulLife}) center/cover no-repeat;
`;

export const ErrorPageTrainingDay = styled.section`
  ${commonStyles};
  background: url(${trainingDay}) center/cover no-repeat;
`;

export const ErrorPageToyStory = styled.section`
  ${commonStyles};
  background: url(${toyStory}) center/cover no-repeat;
`;

export const getRandomStyle = () => {
  const randomIndex = Math.floor(Math.random() * 5);
  let movie: number;

  switch (randomIndex + 1) {
    case 0:
      movie = 0;
      return { component: ErrorPageCasablanca, movie };
    case 1:
      movie = 1;
      return { component: ErrorPageAmerica, movie };
    case 2:
      movie = 2;
      return { component: ErrorPageWonderfulLife, movie };
    case 3:
      movie = 3;
      return { component: ErrorPageTrainingDay, movie };
    case 4:
      movie = 4;
      return { component: ErrorPageToyStory, movie };
    default:
      movie = 1;
      return { component: ErrorPageAmerica, movie };
  }
};

const RandomStyledError = getRandomStyle();

export default RandomStyledError;
