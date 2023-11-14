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
  }

  .fs-h2 {
    font-size: 48px;
    line-height: 48px;
    letter-spacing: -2.1px;
  }

  .fs-h3 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -1.79px;
  }

  .fs-h4 {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -1px;
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
    display: block;
    text-decoration: none;
    font-family: soyjak;
    font-size: 15px;
    width: 180px;
    padding: 15px;
    text-align: center;
    border: 3px solid var(--yellow);
    transition: background-color var(--duration), color var(--duration);

    @media (hover: hover) {
      &:hover {
        background: transparent;
        color: var(--yellow);
      }
    }
  }
`;

export default SCApp;
