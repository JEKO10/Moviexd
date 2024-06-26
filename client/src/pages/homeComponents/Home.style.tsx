import styled, { css } from "styled-components";

import {
  devices,
  flexMixin,
  paragraphColor,
  primaryColor,
  primaryFont,
  secondaryColor,
  tertiaryColor
} from "../../assets/style/GlobalStyles";

type SidebarProp = {
  isScrolled: boolean;
};

type SlideProps = {
  slide: number;
};

const sharedSectionStyle = css`
  margin: 1rem 50px 3rem 15vw; /* top | right | bottom | left */

  @media ${devices.laptopS} {
    margin: 1rem 10vw 3rem 10vw;
  }

  @media ${devices.tablet} {
    margin: 1rem 5vw 3rem 5vw;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 200;

    margin-bottom: 1rem;

    @media ${devices.mobile} {
      font-size: 2.5rem;
      text-align: center;
    }
  }
`;

export const Header = styled.header`
  ${sharedSectionStyle};
  max-width: 55vw;
  margin: 1rem 455px 3rem auto;

  position: relative;

  @media ${devices.desktopS} {
    ${flexMixin({ justify: "center", align: "flex-start" })};
    flex-direction: column;

    max-width: none;

    margin: 1rem 50px 3rem 15vw;
  }

  @media ${devices.laptopS} {
    align-items: center;

    margin: 1rem 10vw 3rem 10vw;
  }

  @media ${devices.tablet} {
    margin: 1rem 5vw 3rem 5vw;
  }
`;

export const HeaderMovie = styled.article<SlideProps>`
  display: flex;
  background-color: ${primaryColor};

  height: 281.25px;
  width: 845px;

  position: relative;

  margin-bottom: 3rem;
  border-radius: 12px;

  overflow: hidden;

  @media ${devices.laptopL} {
    width: 795px;
  }

  @media ${devices.laptopS} {
    height: auto;
    width: 615px;
  }

  @media ${devices.tablet} {
    width: 430px;
  }

  @media ${devices.mobile} {
    width: 288px;
  }

  > article {
    ${flexMixin({ justify: "space-between", align: "center" })};

    position: relative;

    transform: ${({ slide }) => css`translateX(-${slide * 100}%)`};
    transition: transform 500ms ease;

    @media ${devices.laptopS} {
      flex-direction: column-reverse;
    }

    div:first-of-type {
      min-height: 100%;
      width: 345px;

      margin-top: 1.5rem;
      padding: 0 20px;

      @media ${devices.laptopS} {
        min-height: auto;
        width: 100%;

        padding-bottom: 0.8rem;
      }

      @media ${devices.mobile} {
        margin-top: 1rem;
        padding: 0 15px 0.8rem;
      }

      > p {
        color: ${paragraphColor};
        font-size: 1.1rem;
        line-height: 22px;

        height: 110px;

        @media ${devices.mobile} {
          line-height: 23px;
        }
      }
    }
  }

  h3 {
    font-size: 2.6rem;
    font-weight: 100;
    text-transform: uppercase;
    line-height: 40px;

    margin-bottom: 0.5rem;

    @media ${devices.laptopS} {
      line-height: 45px;
    }

    @media ${devices.tablet} {
      font-size: 2.2rem;
      line-height: 40px;
    }
  }

  h4 {
    font-weight: 100;
  }

  h5 {
    color: ${paragraphColor};
    font-size: 1.1rem;
    font-weight: 100;

    margin-top: 0.5rem;

    @media ${devices.mobile} {
      margin-top: 3rem;
    }
  }

  button {
    background-color: ${secondaryColor};

    font-size: 1.5rem;
    font-family: ${primaryFont};
    text-transform: uppercase;

    margin-top: 0.5rem;
    padding: 2px 15px;
    border-radius: 5px;

    cursor: pointer;

    a {
      color: #fff;
      text-decoration: none;
    }

    &:hover {
      background-color: #fff;

      a {
        color: ${secondaryColor};
      }
    }
  }

  img {
    height: 100%;
    width: 500px;
    border-radius: 0 12px 12px 0;

    @media ${devices.laptopL} {
      width: 450px;
    }

    @media ${devices.laptopS} {
      width: 615px;
    }

    @media ${devices.tablet} {
      width: 430px;
    }

    @media ${devices.mobile} {
      width: 288px;
    }
  }
`;

export const HeaderRating = styled.div<SlideProps>`
  background-color: rgba(0, 175, 81, 0.8);
  color: #fff;

  position: absolute;
  top: 0.5rem;
  right: 0.5rem;

  padding: 5px 10px;
  border-radius: 4px;

  p {
    color: #fff;
  }

  svg {
    color: ${tertiaryColor};

    &:nth-child(-n + ${({ slide }) => slide}) {
      color: #fff;
    }
  }
`;

export const HeaderSlides = styled.div<SlideProps>`
  ${flexMixin({ justify: "flex-start", align: "center" })};

  position: absolute;
  bottom: 0.8rem;
  left: 20px;

  @media ${devices.laptopS} {
    left: initial;
    right: 20px;
  }

  @media ${devices.mobile} {
    right: 10px;
  }

  div {
    height: 6px;
    width: 33px;

    margin-right: 0.5rem;
    border-radius: 12px;

    cursor: pointer;

    background: linear-gradient(
      to right,
      ${secondaryColor} 50%,
      ${tertiaryColor} 50%
    );
    background-size: 200% 100%;
    background-position: bottom right;
    transition: all 500ms ease-out;

    &:nth-child(${({ slide }) => slide + 1}) {
      background-position: bottom left;
    }
  }
`;

export const HeaderInfo = styled.article<SlideProps>`
  ${flexMixin({ justify: "space-between", align: "center" })};
  gap: 85px;

  @media ${devices.laptopL} {
    gap: 60px;
  }

  @media ${devices.laptopS} {
    width: 100%;
  }

  @media ${devices.tablet} {
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  @media ${devices.mobile} {
    gap: 20px 0;
  }

  > article {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    background-color: ${primaryColor};

    height: 180px;
    width: 225px;

    position: relative;

    padding: 10px;
    border-radius: 12px;

    overflow: hidden;
    cursor: pointer;

    a,
    div {
      ${flexMixin({ justify: "space-between", align: "flex-start" })};
      text-decoration: none;

      width: 225px;

      position: relative;

      transform: ${({ slide }) => `translateX(-${slide * 100}%)`};
      transition: transform 500ms ease;

      span {
        width: 120px;

        p {
          max-width: 85px;
        }
      }
    }

    &:last-of-type {
      @media ${devices.laptopS} {
        width: 150px;
      }

      @media ${devices.tablet} {
        width: 225px;
      }

      div {
        flex-direction: column;

        @media ${devices.laptopS} {
          width: 150px;
        }

        @media ${devices.tablet} {
          width: 225px;
        }
      }
    }
  }

  img {
    height: 160px;
    width: 96px;

    margin-right: 1rem;
    border-radius: 3px;
  }

  h4 {
    color: ${paragraphColor};
    font-size: 1.5rem;
    font-weight: 100;
  }

  p {
    color: #fff;
    font-size: 1.4rem;
    line-height: 30px;
  }

  ul {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    flex-wrap: wrap;
    gap: 5px;

    width: 215px;

    list-style-type: none;

    @media ${devices.laptopS} {
      width: 140px;
    }

    @media ${devices.tablet} {
      width: 215px;
    }

    li {
      font-size: 1.4rem;
      line-height: 25px;

      margin: 0 0.3rem;
    }
  }
`;

export const FixedSidebar = styled.aside<SidebarProp>`
  position: fixed;

  transform: ${({ isScrolled }) =>
    isScrolled ? " translateY(-80px)" : " translateY(0)"};
  transition: transform 200ms ease;

  @media ${devices.laptopS} {
    display: none;
  }

  > div {
    background-color: #3d3d3d;
    height: 3px;
    width: 130px;
    margin: 0 50px;
    border-radius: 10px;

    @media ${devices.desktopS} {
      margin: 0 33px 5px;
    }

    @media ${devices.laptopL} {
      width: 110px;

      margin: 0 23px 5px;
    }

    @media ${devices.tablet} {
      margin: 0 25px 5px;
    }
  }
`;

export const Side = styled.aside`
  width: fit-content;
  padding: 15px 50px;

  @media ${devices.desktopS} {
    padding: 15px 33px;
  }

  @media ${devices.laptopL} {
    padding: 5px 23px;
  }

  @media ${devices.tablet} {
    padding: 5px 25px;
  }

  h3 {
    color: #949494;
    font-weight: 200;
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    width: fit-content;

    margin-bottom: 0.8rem;
    cursor: pointer;

    @media ${devices.laptopL} {
      margin-bottom: 0.5rem;
    }

    svg {
      font-size: 1.3rem;
      font-weight: 800;
      color: ${tertiaryColor};

      margin-right: 0.5rem;

      transform: translateX(-5px);

      @media ${devices.laptopL} {
        margin-right: 0rem;
      }
    }

    p {
      font-size: 20px;
      color: #949494;
    }

    &:hover p {
      color: ${secondaryColor};
    }
  }
`;

export const Features = styled.section`
  ${flexMixin({ justify: "space-between", align: "flex-end" })};
  ${sharedSectionStyle};

  @media ${devices.tablet} {
    flex-direction: column;
    align-items: center;
  }

  article {
    margin-right: 1rem;

    @media ${devices.tablet} {
      width: 100%;

      margin-right: 0;
    }
  }

  div {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};

    width: 845px;

    margin-top: 2rem;
    padding: 20px;
    border-radius: 10px;

    cursor: pointer;

    @media ${devices.desktopS} {
      width: 100%;
    }

    @media ${devices.laptopS} {
      margin-top: 1rem;
    }

    @media ${devices.mobile} {
      padding: 10px;
    }

    & {
      :hover p {
        color: ${secondaryColor};
      }

      :last-of-type {
        margin-bottom: 0;
      }
    }

    svg {
      font-size: 5rem;
      color: ${tertiaryColor};

      margin-right: 2rem;

      @media ${devices.laptopL} {
        margin-right: 1rem;
      }

      @media ${devices.laptopS} {
        font-size: 4rem;

        margin-right: 0.5rem;
      }

      @media ${devices.tablet} {
        margin-right: 1rem;
      }
    }

    p {
      color: ${tertiaryColor};
      font-size: 1.8rem;
      text-transform: uppercase;

      max-width: 550px;

      @media ${devices.laptopL} {
        font-size: 1.5rem;
        line-height: 25px;
      }

      @media ${devices.laptopS} {
        font-size: 1.2rem;
      }

      @media ${devices.mobile} {
        font-size: 1rem;
        line-height: 20px;
      }
    }
  }
`;

export const RatePopUp = styled.aside`
  background-color: rgba(0, 175, 81, 0.2);

  text-align: center;

  width: 324px;

  padding: 25px 0;
  border-radius: 12px;

  @media ${devices.tablet} {
    width: 100%;

    margin-top: 2rem;
  }

  p {
    font-size: 1.75rem;
    text-transform: uppercase;
    text-align: center;

    max-width: 260px;

    margin: 1rem auto 2rem;

    @media ${devices.laptopL} {
      font-size: 1.3rem;

      padding: 0 10px;
    }

    @media ${devices.laptopS} {
      font-size: 1.1rem;

      padding: 0 20px;
    }

    @media ${devices.tablet} {
      font-size: 1.5rem;

      max-width: 100%;
      width: 100%;
    }
  }

  button {
    background-color: ${secondaryColor};
    color: #fff;

    font-size: 2rem;
    font-family: ${primaryFont};
    text-transform: uppercase;

    padding: 5px 60px;
    border-radius: 10px;

    transition: all 300ms ease;
    cursor: pointer;

    @media ${devices.laptopS} {
      margin-left: 0;
      padding: 5px 50px;
    }

    &:hover {
      background-color: ${primaryColor};
      color: ${secondaryColor};
    }
  }
`;

export const Oscar = styled.section`
  ${sharedSectionStyle};

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); */

    @media ${devices.laptopS} {
      /* justify-content: center; */
      flex-wrap: wrap;

      gap: 10px 20px;
    }

    @media ${devices.tablet} {
      justify-content: space-between;
    }

    @media ${devices.mobile} {
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    img {
      width: 162px;

      border: 2px solid transparent;
      border-radius: 15px;

      transition: border 200ms ease;
      cursor: pointer;

      &:hover {
        border: 2px solid ${secondaryColor};
      }

      @media ${devices.desktopS} {
        width: 150px;
      }

      @media ${devices.laptopL} {
        width: 120px;
      }

      @media ${devices.laptopS} {
        width: 150px;
      }

      @media ${devices.tablet} {
        width: 120px;
      }

      @media ${devices.mobile} {
        width: 200px;
      }
    }
  }
`;

export const News = styled.section`
  ${sharedSectionStyle};

  article {
    ${flexMixin({ justify: "flex-start", align: "center" })};
    background-color: ${primaryColor};

    padding-right: 20px;
    border-radius: 12px;

    @media ${devices.laptopS} {
      align-items: flex-start;
      flex-direction: column;

      padding-right: 0;
    }

    div {
      @media ${devices.laptopS} {
        padding: 20px;
      }
    }

    img {
      margin-right: 2rem;
      border-radius: 12px;

      @media ${devices.laptopS} {
        width: 100%;

        margin-right: 0;
        border-radius: 12px 12px 0 0; /* top-left | top-right | bottom-right | bottom-left */
      }
    }

    h3 {
      font-size: 3rem;
      font-weight: 100;

      @media ${devices.desktopS} {
        font-size: 2.5rem;
      }

      @media ${devices.laptopL} {
        font-size: 2rem;
        line-height: 35px;
      }

      @media ${devices.laptopS} {
        font-size: 3rem;
      }

      @media ${devices.tablet} {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.2rem;
      color: ${paragraphColor};
      line-height: 25px;

      max-width: 450px;
      margin: 1rem 0;

      @media ${devices.laptopL} {
        font-size: 1rem;
      }

      @media ${devices.laptopS} {
        max-width: none;
      }
    }

    button {
      background: none;
      color: #fff;

      font-size: 1.5rem;
      font-family: ${primaryFont};
      text-transform: uppercase;

      cursor: pointer;
    }
  }
`;

export const FriendsActivity = styled.section`
  ${sharedSectionStyle};

  article {
    ${flexMixin({ justify: "space-between", align: "center" })};
    flex-wrap: wrap;

    @media ${devices.desktopS} {
      gap: 1rem;
    }

    @media ${devices.laptopL} {
      justify-content: center;
    }

    @media ${devices.laptopS} {
      flex-direction: column;
    }

    > div {
      background-color: ${primaryColor};
      width: 330px;

      padding: 10px;
      border-radius: 12px;

      cursor: pointer;

      @media ${devices.laptopS} {
        width: 100%;
      }

      @media ${devices.tablet} {
        width: 333px;
      }

      @media ${devices.mobile} {
        width: 287px;
      }

      div {
        ${flexMixin({ justify: "space-between", align: "center" })};
        padding: 0 5px;

        p {
          font-size: 2rem;
        }

        span {
          margin-bottom: -1rem;
        }

        svg {
          color: ${tertiaryColor};
          font-size: 1.5rem;

          margin: 0 0.5rem;
        }
      }
    }

    ul {
      ${flexMixin({ justify: "flex-start", align: "center" })};
      list-style-type: none;

      border-radius: 12px;

      @media ${devices.laptopS} {
        justify-content: space-between;
      }

      @media ${devices.tablet} {
        justify-content: flex-start;
      }

      li {
        margin-right: -5rem;

        @media ${devices.laptopS} {
          margin-right: 0;
        }

        @media ${devices.tablet} {
          margin-right: -5rem;
        }

        @media ${devices.mobile} {
          margin-right: -4rem;
        }

        img {
          height: 185px;
          width: 137px;

          border: 2px solid ${secondaryColor};
          border-radius: 12px;

          box-shadow:
            inset 0 1px 0 #000,
            0 0 10px #000;

          @media ${devices.mobile} {
            height: 170px;
            width: 115px;
          }
        }
      }
    }
  }
`;
