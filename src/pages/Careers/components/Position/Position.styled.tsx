import styled from "styled-components";

const SCPosition = styled.div`
  background: var(--snow);
  display: flex;
  justify-content: space-between;
  padding: 38px 40px;
  padding-right: 64px;

  .text {
    color: var(--dark-navy);
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media screen and (max-width: 700px) {
      gap: 4px;
    }
  }

  .button-primary {
    max-width: 350px;
    @media screen and (max-width: 700px) {
      width: 100%;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 38px 48px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 32px;
    padding-top: 36px;
    text-align: center;
  }
`;

export default SCPosition;
