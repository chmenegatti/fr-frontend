import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ffa100;
  border-radius: 4px;
  height: 30px;
  width: 30px;
  border: 1px solid #222;
  color: #312e38;
  transition: background-color 0.2s;
  margin-right: 8px;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background: ${shade(0.2, '#FFa100')};
  }
`;
