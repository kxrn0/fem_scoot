import styled from "styled-components";

const SCNavbar = styled.div`
  display: flex;
  align-content: center;
  gap: 60px;
  padding: 35px 165px;

  .main {
    display: flex;
    align-items: center;

    .navbar-toggle {
      width: 20px;
      height: 20px;
      display: none;
      position: relative;

      input[type="checkbox"] {
        appearance: none;
        position: absolute;
        inset: 0;
      }

      @media screen and (max-width: 740px) {
        display: grid;
        place-items: center;
      }
    }

    a {
      display: block;

      @media screen and (max-width: 740px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    @media screen and (max-width: 740px) {
      background: white;
      width: 100%;
      height: 100%;
      z-index: 2;
      padding: 25px 35px;
      position: relative;
    }
  }

  .overlay {
    background: black;
    position: fixed;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--duration);
    display: none;
    z-index: 3;

    @media screen and (max-width: 740px) {
      display: block;

      &.active {
        opacity: 0.75;
        pointer-events: all;
      }
    }
  }

  .links {
    flex-grow: 1;
    display: flex;
    align-items: center;

    .navigation {
      flex-grow: 1;
      display: flex;
      gap: 32px;

      a {
        color: var(--dim-gray);
        text-decoration: none;
        transition: color var(--duration);

        @media (hover: hover) {
          &:hover {
            color: var(--yellow);
          }
        }
      }

      @media screen and (max-width: 740px) {
        flex-direction: column;
      }
    }

    .button-primary {
      @media screen and (max-width: 740px) {
        width: 195px;
      }
    }

    @media screen and (max-width: 740px) {
      background: var(--hidden-navy);
      flex-direction: column;
      align-items: flex-start;
      padding: 40px 32px;
      padding-top: 130px;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      z-index: 3;
      transform: translate(-100%);
      transition: transform var(--duration);

      @media (prefers-reduced-motion) {
        transition: none;
      }

      &.open {
        transform: translate(0);
      }
    }
  }

  @media screen and (max-width: 1250px) {
    padding: 35px 40px;
  }

  @media screen and (max-width: 740px) {
    padding: 0;
  }
`;

export default SCNavbar;
