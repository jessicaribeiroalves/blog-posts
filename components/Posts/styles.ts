import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline-start: auto;
  margin-inline-end: auto;
  max-width: 42rem;
  padding: 1rem;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
`;

export const Button = styled.button<{ disabled?: boolean }>`
  background: ${({ disabled }) => disabled ? '#CDCDCD' : '#8F6593'};
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${({ disabled }) => disabled ? '#CDCDCD' : '#8F6593'};
  border-radius: 3px;
  &:hover {
      background: ${({ disabled }) => disabled ? '#CDCDCD' : '#AEA4BF'};
      border: 2px solid ${({ disabled }) => disabled ? '#CDCDCD' : '#AEA4BF'};
      cursor: ${({ disabled }) => disabled ? '' : 'pointer'};
    }
`;