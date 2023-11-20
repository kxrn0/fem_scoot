import styled from "styled-components";

const SCLocations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image {
    position: relative;
    width: fit-content;
    margin: 120px 0;

    img {
      @media screen and (max-width: 690px) {
        width: 100%;
      }
    }

    .points {
      position: absolute;
      inset: 0;

      .point {
        background: var(--yellow);
        color: var(--dark-navy);
        position: absolute;
        top: var(--top-d);
        left: var(--left-d);
        width: 190px;
        height: 70px;
        display: grid;
        place-items: center;
        z-index: 1;

        &::after {
          content: "";
          background: var(--yellow);
          width: 25px;
          height: 25px;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 10px) rotate(45deg);
          z-index: -1;

          @media screen and (max-width: 690px) {
            display: none;
          }
        }

        @media screen and (max-width: 1115px) {
          width: 120px;
          height: 32px;
          top: var(--top-t);
          left: var(--left-t);
          font-size: 13px;
          line-height: 28px;
          letter-spacing: -0.5px;
        }

        @media screen and (max-width: 690px) {
          background: rgba(252, 183, 43, 0.15);
          position: static;
          font-size: 24px;
          padding: 22px;
          width: 310px;
          height: auto;
        }
      }

      @media screen and (max-width: 690px) {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }

    @media screen and (max-width: 1115px) {
      margin: 145px 0 64px 0;
    }

    @media screen and (max-width: 690px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 40px;
      margin: 72px 0;
    }
  }

  .question {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 105px;

    .text {
      display: flex;
      align-items: center;
      gap: 30px;

      .fs-h2 {
        color: var(--dark-navy);
        max-width: 350px;
      }

      .fs-body-1 {
        color: var(--dim-gray);
        max-width: 445px;
      }

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 40px;
      }
    }

    @media screen and (max-width: 1200px) {
      text-align: center;
      flex-direction: column;
      gap: 40px;
    }

    @media screen and (max-width: 500px) {
      padding: 0 32px;
    }
  }
`;

export default SCLocations;
