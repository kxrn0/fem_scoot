import styled from "styled-components";

const SCCareers = styled.div`
  .message {
    padding-top: 120px;
  }

  .positions {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0 165px;
    padding-top: 120px;

    @media screen and (max-width: 1000px) {
      padding: 0 40px;
      padding-top: 120px;
      gap: 16px;
    }
  }
`;

export default SCCareers;
