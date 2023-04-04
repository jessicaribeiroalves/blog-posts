import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 0px;
  word-wrap: break-word;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;
  color: #1A202C;
  -webkit-box-align: center;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  border-color: #E2E8F0;
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  &:hover {
      color: #AEA4BF;
      cursor: pointer
    }
`;

export const CardSubTitle = styled.h4`
  color: #8F6593;
  font-weight: 600;
  line-height: 1.2;
`;

export const CardBody = styled.div`
  padding: 1.25rem;
  flex: 1 1 0%;
`;

export const AuthorSection = styled.div`
  display: flex;
  align-items: baseline;
`;

export const AuthorName = styled.div`
  padding-left: 0.75rem;
`;

export const CardFooter = styled.div`
  padding: 1.25rem;
`;
