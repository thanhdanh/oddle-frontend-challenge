import styled from 'styled-components';

import buttonStyles, { } from './styles';

const StyledButton = styled.button`
  ${buttonStyles};
`;

export const DefaultStyledButton = styled(StyledButton)`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
  &:hover {
    color: #333;
    background-color: #e6e6e6;
    border-color: #adadad;
  }
`;

export const GreenStyledButton = styled(StyledButton)`
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
`;

export const RedStyledButton = styled(StyledButton)`
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
`;

export const BlueStyledButton = styled(StyledButton)`
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
`;

export const WarningStyledButton = styled(StyledButton)`
  color: #fff;
  background-color: #f0ad4e;
  border-color: #eea236;
`;

export default StyledButton;