import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.div`
  display: grid;
  grid-gap: 20px;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style: none;

  li {
    background: #fff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    padding: 20px;

    img {
      align-self: center;
      max-width: 250px;
    }

    > strong {
      color: #333;
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      align-items: center;
      background: #48a0dc;
      border: 0;
      border-radius: 4px;
      color: #fff;
      display: flex;
      margin-top: auto;
      overflow: hidden;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#48a0dc')};
      }

      div {
        align-items: center;
        background: rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 12px;

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        font-weight: bold;
        text-align: center;
      }
    }
  }
`;
