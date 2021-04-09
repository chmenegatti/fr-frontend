import styled from 'styled-components';

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: 100%;

  select {
    display: inline-block;
    font-size: 20px;
    width: 100%;
    height: 56px;
    cursor: pointer;
    padding: 10px 15px;
    outline: 0;
    border: 1px solid #212329;
    border-radius: 10px;
    background: #212329;
    color: #f4ede8;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    ::-ms-expand {
      display: none;
    }

    &:hover,
    &:focus {
      color: #212329;
      background: #ffa100;
    }
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }

  .select_arrow {
    position: absolute;
    top: 24px;
    right: 24px;
    width: 0px;
    height: 0px;
    border: solid #7b7b7b;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  &:hover ~ .select_arrow,
  &:focus ~ .select_arrow {
    border-color: #000000;
  }
  &:disabled ~ .select_arrow {
    border-top-color: #cccccc;
  }
`;
