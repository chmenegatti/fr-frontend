import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const AddProductContainer = styled.div`
  height: 100vh;
  width: 98vw;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const AddProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 1040px;
  margin-top: 80px;

  h1 {
    color: #ffa100;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  animation: ${appearFromLeft} 1.5s;

  form {
    margin: 32px 0;
    width: 640px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
  > a {
    color: #ffa100;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#FFa100')};
    }
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h2 {
    font-weight: bold;
    margin-right: 16px;
    color: #ffa100;
  }
`;
