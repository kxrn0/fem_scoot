import styled from "styled-components";

const SCFooter = styled.div`
  background: var(--hidden-navy);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 165px;

  .links {
    display: flex;
    align-items: center;
    gap: 60px;

    svg {
      path {
        fill: white;
      }
    }

    .rest {
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

      @media screen and (max-width: 700px) {
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 40px;
    }
  }

  .socials {
    display: flex;
    gap: 25px;

    a {
      position: relative;

      span {
        position: absolute;
        inset: 0;

        @media (hover: hover) {
          &:hover + svg {
            path {
              fill: var(--light-gray);
            }
          }
        }
      }

      svg {
        path {
          transition: fill var(--duration);
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 35px 40px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 85px;
    padding: 0;
    padding-top: 65px;
    padding-bottom: 90px;
  }
`;

export default SCFooter;
