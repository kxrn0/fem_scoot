import styled from "styled-components";

const SCPseudoNavbar = styled.div`
  position: relative;
  display: grid;
  grid-template-areas: "stack";
  overflow: hidden;

  picture {
    grid-area: stack;

    img {
      width: 100%;
    }
  }

  .fs-h1 {
    color: white;
    grid-area: stack;
    display: flex;
    align-items: center;
    padding: 0 165px;

    @media screen and (max-width: 1200px) {
      padding: 0 100px;
    }

    @media screen and (max-width: 700px) {
      justify-content: center;
      padding: 0;
    }
  }

  svg {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(30px, -50%);

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  @media screen and (max-width: 700px) {
  }
`;

export default SCPseudoNavbar;
