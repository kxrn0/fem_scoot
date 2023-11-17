import styled from "styled-components";

const SCPseudoFooter = styled.div`
  background: var(--dark-navy);
  color: white;
  position: relative;
  padding: 105px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 335px;
  overflow: hidden;
  margin-top: 200px;

  .fs-h2 {
    max-width: 415px;
  }

  .icons {
    display: flex;
    gap: 20px;
    z-index: 1;

    @media screen and (max-width: 1024px) {
      gap: 12px;
    }

    @media screen and (max-width: 600px) {
      transform: scale(0.7);
    }
  }

  & > svg {
    position: absolute;
    right: -165px;
    bottom: 0;
    z-index: 0;

    @media screen and (max-width: 1160px) {
      right: auto;
      left: 50%;
      transform: translate(-50%);
    }

    @media screen and (max-width: 600px) {
      right: -165px;
      left: auto;
      transform: translate(0);
    }
  }

  @media screen and (max-width: 1150px) {
    gap: 200px;
    margin-top: 105px;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
    padding: 65px;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    padding: 88px 32px;
    margin-top: 120px;
  }
`;

export default SCPseudoFooter;
