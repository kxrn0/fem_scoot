import styled from "styled-components";

const SCValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 90px;
  text-align: center;

  .image {
    position: relative;
    width: fit-content;

    img {
      border-radius: 100%;
    }

    .fs-h4 {
      background: var(--yellow);
      color: var(--dark-navy);
      display: grid;
      place-items: center;
      width: 96px;
      height: 96px;
      position: absolute;
      top: 200px;
      left: 50%;
      border-radius: 100%;
      transform: translate(-50%);

      @media screen and (max-width: 500px) {
        top: 190px;
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

      @media screen and (max-width: 1000px) {
        max-width: 460px;
      }
    }
  }

  @media screen and (max-width: 500px) {
    gap: 65px;
  }
`;

export default SCValue;
