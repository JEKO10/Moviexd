import styled from "styled-components";

import { flexMixin } from "./GlobalStyles";

export const CategoriesSection = styled.section`
  width: 70vw;
  margin: 2rem 0 5rem 0;

  > div {
    ${flexMixin({ justify: "flex-start", align: "flex-start" })};
    margin: 2rem 0;
    width: 40%;
    flex-direction: column;
    flex-wrap: wrap;

    > div {
      margin: 0 2rem 1rem 0;
    }

    p {
      margin: 0 1rem 0.5rem 0;
      color: #e1e1ff99;
      text-transform: uppercase;
    }

    ul {
      list-style-type: none;

      li {
        display: inline-block;
        font-size: 0.9rem;
        background-color: #303840;
        color: #e1e1ff99;
        margin: 5px 5px 5px 0;
        border-radius: 5px;
        cursor: pointer;

        a {
          display: inline-block;
          color: #e1e1ff99;
          text-decoration: none;
          padding: 5px 10px;

          &:hover {
            color: #fff;
          }
        }

        &:hover {
          color: #fff;
        }
      }
    }
  }
`;

export const CategoriesOption = styled.ul`
  ${flexMixin({ justify: "flex-start", align: "center" })};
  list-style-type: none;
  color: #dda804;

  li {
    margin-right: 20px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
      border-bottom: 2px solid #dda804;
    }

    &.active {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }
`;

export const Details = styled.div`
  ul li {
    padding: 5px 10px;
  }
`;
