import styled from 'styled-components';
import { shade } from 'polished';
import ActionButton from '../../components/ActionButton';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 16px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: #999591;
      width: 20px;
      height: 20px;

      &:hover {
        color: #ffa100;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    line-height: 24px;
  }

  span {
    color: #f4ede8;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 32px auto;
  display: block;

  h1 {
    font-size: 24px;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
`;

export const TableContent = styled.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  background-color: #28262e;
`;

export const TableBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;

  table {
    width: 90%;
    margin: 32px;
    border-collapse: collapse;

    thead {
      background-color: #ffa100;
      color: #28262e;
      font-size: 18px;
      font-weight: bold;

      th {
        padding: 8px;
        text-align: center;

        &:nth-child(2) {
          width: 10%;
        }

        &:first-child {
          text-align: left;
          width: 45%;
        }
      }
    }

    tbody {
      tr {
        &:hover {
          background-color: ${shade(0.2, '#555')};
        }

        &:nth-of-type(2n) {
          background-color: #ffda8a;
          color: #28262e;

          &:hover {
            background-color: ${shade(0.2, '#ffda8a')};
          }
        }

        td {
          padding: 12px 4px;
          text-align: center;

          &:first-child {
            text-align: left;
          }

          &:last-child {
            width: 10%;
          }
        }
      }
    }
  }
`;

export const ActionButtons = styled(ActionButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;

  p {
    margin-right: 8px;
  }
`;
