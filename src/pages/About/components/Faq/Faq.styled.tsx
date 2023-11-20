import styled from "styled-components";

const SCFaq = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;

  .fs-h3 {
    color: var(--dark-navy);
  }

  .questions {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .question {
      background: var(--snow);
      display: flex;
      flex-direction: column;
      padding: 32px 40px;

      .head {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .fs-h4 {
          color: var(--dark-navy);
        }

        .input-wrapper {
          position: relative;

          svg {
            transition: transform var(--duration);
          }

          input[type="checkbox"] {
            appearance: none;
            position: absolute;
            inset: 0;

            &:checked + svg {
              transform: rotate(-180deg);
            }
          }
        }
      }

      .base {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows var(--duration), padding var(--duration);

        &.open {
          grid-template-rows: 1fr;
          padding-top: 24px;
        }

        .answer {
          color: var(--dark-navy);
          overflow: hidden;
          max-width: 730px;
        }
      }
    }

    @media screen and (max-width: 1000px) {
      gap: 24px;
    }

    @media screen and (max-width: 500px) {
      gap: 16px;
    }
  }

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export default SCFaq;
