import styled from "styled-components";

const SCApp = styled.div`
  --yellow: #fcb72b;
  --dark-navy: #495567;
  --hidden-navy: #333a44;
  --dim-gray: #939caa;
  --light-gray: #e5ecf4;
  --snow: #f2f5f9;
  --light-yellow: #fff4df;
  --duration: 0.33s;

  background: white;

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-h4,
  .fs-body-2 {
    font-family: soyjak;
  }

  .fs-h1 {
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -2.5px;

    &.scalable {
      @media screen and (max-width: 690px) {
        font-size: 40px;
        line-height: 40px;
        letter-spacing: -1.8px;
      }
    }
  }

  .fs-h2 {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -2.1px;

    &.scalable {
      @media screen and (max-width: 600px) {
        font-size: 32px;
        line-height: 32px;
        letter-spacing: -1.4px;
      }
    }
  }

  .fs-h3 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.79px;

    &.scalable {
      @media screen and (max-width: 500px) {
        font-size: 24px;
        line-height: 28px;
        letter-spacing: -1px;
      }
    }
  }

  .fs-h4 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1px;

    &.scalable {
      @media screen and (max-width: 500px) {
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.8px;
      }
    }
  }

  .fs-body-1 {
    font-family: lexend;
    font-size: 15px;
    line-height: 25px;
  }

  .fs-body-2 {
    font-size: 15px;
    line-height: 25px;
  }

  .button-primary {
    background: var(--yellow);
    color: white;
    display: grid;
    place-items: center;
    text-decoration: none;
    font-family: soyjak;
    font-size: 15px;
    width: 180px;
    padding: 15px;
    border: 3px solid var(--yellow);
    transition: background-color var(--duration), color var(--duration);

    @media (hover: hover) {
      &:hover {
        background: transparent;
        color: var(--yellow);
      }
    }
  }

  .values {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 105px;
    padding-top: 120px;

    .fs-h2 {
      color: var(--dark-navy);
    }

    .values-container {
      display: flex;
      justify-content: center;
      gap: 30px;

      @media screen and (max-width: 1000px) {
        flex-direction: column;
      }
    }

    @media screen and (max-width: 500px) {
      gap: 65px;
      padding-right: 32px;
      padding-left: 32px;
    }
  }
`;

export default SCApp;
