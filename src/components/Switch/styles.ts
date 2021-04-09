import styled from 'styled-components';

export const TogleControll = styled.label`
  display: block;
  position: relative;
  padding-left: 100px;
  margin-bottom: 28px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ .control {
      background-color: #ffa100;
    }

    &:checked ~ .control:after {
      left: 32px;
    }
  }

  .control {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 60px;
    border-radius: 25px;
    background-color: #232129;
    transition: background-color 0.15s ease-in;

    &:after {
      content: '';
      position: absolute;
      left: 3px;
      top: 3px;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: white;
      transition: left 0.15s ease-in;
    }
  }
`;
