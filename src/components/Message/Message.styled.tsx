import styled from "styled-components";

const SCMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 220px;
  position: relative;
  overflow: hidden;

  &.reverse {
    flex-direction: row-reverse;

    &::after {
      right: 100%;
      transform: translate(100px);
    }

    @media screen and (max-width: 1330px) {
      flex-direction: column-reverse;
    }
  }

  &.normal {
    &::after {
      left: 100%;
      transform: translate(-100px);
    }
  }

  &::after {
    content: "";
    background: var(--light-gray);
    width: 445px;
    height: 445px;
    border-radius: 100%;
    position: absolute;
    top: 0;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }

  .text {
    max-width: 445px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .info {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .fs-h2 {
        color: var(--dark-navy);
      }

      .fs-body-1 {
        color: var(--dim-gray);
      }

      @media screen and (max-width: 1330px) {
        gap: 40px;
      }

      @media screen and (max-width: 600px) {
        gap: 32px;
      }
    }

    @media screen and (max-width: 1330px) {
      align-items: center;
    }

    @media screen and (max-width: 600px) {
      gap: 32px;
      padding: 0 32px;
    }
  }

  img {
    border-radius: 100%;

    @media screen and (max-width: 600px) {
      width: 310px;
      height: 310px;
    }
  }

  svg {
    position: absolute;
    z-index: 1;
    top: var(--top-d);
    right: var(--right-d);
    bottom: var(--bottom-d);
    left: var(--left-d);

    @media screen and (max-width: 1330px) {
      top: var(--top-t);
      right: var(--right-t);
      bottom: var(--bottom-t);
      left: var(--left-t);
    }

    @media screen and (max-width: 750px) {
      top: var(--top-m);
      right: var(--right-m);
      bottom: var(--bottom-m);
      left: var(--left-m);
    }
  }

  @media screen and (max-width: 1330px) {
    text-align: center;
    flex-direction: column-reverse;
    gap: 55px;
  }
`;

export default SCMessage;
