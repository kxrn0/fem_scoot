import styled from "styled-components";

const SCHome = styled.div`
  .hero {
    position: relative;
    overflow-x: hidden;
    display: grid;
    grid-template-areas: "stack";

    picture {
      grid-area: stack;

      img {
        width: 100%;
      }
    }

    .content {
      color: white;
      grid-area: stack;
      width: 100%;
      height: 100%;
      padding: 155px 165px;
      display: flex;
      flex-direction: column;
      gap: 40px;

      .fs-h1 {
        max-width: 500px;

        @media screen and (max-width: 1400px) {
          max-width: 575px;
        }
      }

      .paragraph {
        max-width: 405px;
        margin-left: 95px;
        display: flex;
        flex-direction: column;
        gap: 40px;

        @media screen and (max-width: 1400px) {
          margin-left: 0;
          align-items: center;
          max-width: 575px;
        }

        @media screen and (max-width: 690px) {
          gap: 35px;
        }
      }

      @media screen and (max-width: 1400px) {
        padding: 0;
        padding-top: 140px;
        align-items: center;
        text-align: center;
      }

      @media screen and (max-width: 690px) {
        padding: 115px 32px;
        padding-bottom: 0;
        gap: 24px;
      }
    }

    svg {
      position: absolute;

      &:first-of-type {
        top: 355px;
        left: 0;

        @media screen and (max-width: 1400px) {
          display: none;
        }
      }

      &:nth-of-type(2) {
        top: 355px;
        left: 705px;

        @media screen and (max-width: 1400px) {
          top: 485px;
          left: 0;
          transform: translate(-125px);
        }

        @media screen and (max-width: 750px) {
          top: 425px;
        }

        @media screen and (max-width: 690px) {
          top: 460px;
          transform: translate(-310px);
        }
      }

      &:nth-of-type(3) {
        top: 430px;
        right: 0;
        transform: translate(50px);

        @media screen and (max-width: 1400px) {
          top: 560px;
          transform: translate(30px);
        }

        @media screen and (max-width: 750px) {
          top: 500px;
        }

        @media screen and (max-width: 690px) {
          display: none;
        }
      }
    }
  }

  .instructions {
    display: flex;
    gap: 30px;
    padding: 160px 0 200px 165px;
    overflow: hidden;

    @media screen and (max-width: 1045px) {
      flex-direction: column;
      padding: 125px 100px;
      padding-bottom: 145px;
    }

    @media screen and (max-width: 700px) {
      padding: 120px 35px;
    }
  }

  .messages {
    display: flex;
    flex-direction: column;
    gap: 160px;

    @media screen and (max-width: 1330px) {
      gap: 130px;
    }

    @media screen and (max-width: 600px) {
      gap: 120px;
    }
  }
`;

export default SCHome;
