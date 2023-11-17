import styled from "styled-components";

const SCAbout = styled.div`
  .messages {
    display: flex;
    flex-direction: column;
    gap: 120px;
    padding-top: 120px;

    @media screen and (max-width: 1000px) {
      gap: 130px;
      padding-top: 145px;
    }

    @media screen and (max-width: 500px) {
      gap: 120px;
      padding-top: 75px;
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

export default SCAbout;
