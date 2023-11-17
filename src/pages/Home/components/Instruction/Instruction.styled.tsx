import styled from "styled-components";

const SCInstruction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  .svg {
    position: relative;

    &::before {
      content: "";
      background: var(--light-gray);
      display: block;
      width: 100%;
      height: 15px;
      position: absolute;
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      z-index: 0;

      @media screen and (max-width: 1045px) {
        width: 15px;
        height: 170px;
        top: auto;
        right: 50%;
        bottom: 100%;
        transform: translate(50%, 0);
      }

      @media screen and (max-width: 700px) {
        display: none;
      }
    }

    svg {
      z-index: 2;
      position: relative;

      @media screen and (max-width: 500px) {
        transform: scale(0.58);
      }
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 30px;

    .fs-h4 {
      color: var(--dark-navy);
    }

    .fs-body-1 {
      color: var(--dim-gray);
      max-width: 350px;

      @media screen and (max-width: 1045px) {
        max-width: auto;
      }
    }

    @media screen and (max-width: 700px) {
      gap: 24px;
    }
  }

  @media screen and (max-width: 1045px) {
    flex-direction: row;
    gap: 80px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }
`;

export default SCInstruction;
