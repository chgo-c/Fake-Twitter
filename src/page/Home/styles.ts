import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  justify-content: center;

  .client-data-img {
    min-width: 40px;
    min-height: 40px;
    border-radius: 50%;
  }

  .home-content {
    border: 1px solid rgb(239, 243, 244);
    padding: 16px 0px;

    .home-content-top {
      background-color: rgba(255, 255, 255, 0.85);
      position: sticky;
      top: 0;
    }
    .link-title {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.primaryFontWeight};
      padding-left: 16px;
    }
    .tab-list {
      display: flex;
      align-items: center;
      font-size: ${({ theme }) => theme.secondaryFontSize};
      margin-top: 32px;

      .tab-list-item {
        width: 292px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0 0 0;

        &:hover {
          background-color: rgba(15, 20, 25, 0.1);
        }
        .tab-list-item-text {
          display: flex;
          flex-direction: column;
          color: ${({ theme }) => theme.textSecondaryColor};
        }
        .tab-list-item-text.active {
          color: #000;
        }
        .line {
          width: 100%;
          border-radius: 20px;

          display: inline-block;
          margin-top: 16px;
        }
        .line.active {
          border-bottom: ${({ theme }) => `4px solid ${theme.primaryColor}`};
          margin-top: 12px;
        }
      }
    }
    .client-textarea-container {

    }
  }
`;
export const OtherUser = styled.div`
  padding: 0 0 8px 0;
  .other-user-content {
    border-bottom: 1px solid rgb(239, 243, 244);
    font-size: ${({ theme }) => theme.secondaryFontSize};
    margin: 10px 0 0 0;
    padding: 0 0 12px 16px;
    .client-data-img {
      width: 50px;
      height: 50px;
    }
    display: flex;

    .other-data-container {
      padding: 0 0 0 10px;
      .other-user-block {
        color: ${({ theme }) => theme.textSecondaryColor};
        display: flex;

        .other-user-name {
          color: ${({ theme }) => theme.textColor};
        }
        .other-user-account {
          margin: 0 3px 0 8px;
        }
        .other-user-date {
          margin: 0 0 0 3px;
        }
      }
      .other-user-text {
        width: 506px;
        word-wrap: break-word;
        margin: 5px 0 0 0;
        line-height: 20px;
      }
      .other-user-image {
        margin: 14px 0 0 0;
        padding: 0 12px 0 0;
        img {
          width: 100%;
          height: 370px;
          border-radius: 16px;
        }
      }
      .other-user-icon {
        color: ${({ theme }) => theme.textSecondaryColor};
        font-size: 13px;
        margin: 12px 0 0 0;
        width: 80%;
        display: flex;
        justify-content: space-between;

        .other-user-icon-item {
          display: flex;
          align-items: flex-end;
          svg {
            width: 18.75px;
            margin: 0 12px 0 0;
            fill: ${({ theme }) => theme.textSecondaryColor};
          }
        }
      }
    }
  }
`;
