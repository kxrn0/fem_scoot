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

  .faqs {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    padding: 120px 0 40px 0;

    .fs-h2 {
      color: var(--dark-navy);
    }

    @media screen and (max-width: 1250px) {
      padding: 120px 40px;
      padding-bottom: 0;
    }

    @media screen and (max-width: 500px) {
      gap: 48px;
      padding: 120px 32px;
      padding-bottom: 0;
    }
  }
`;

export default SCAbout;
