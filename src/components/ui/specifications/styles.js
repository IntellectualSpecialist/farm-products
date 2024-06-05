import styled from "styled-components";

export const Dl = styled.dl`
  margin: 0;
`;

export const StyledDiv = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Dt = styled.dt`
  display: inline-block;
  margin-right: 6px;
  font-weight: 700;

  &::after {
    content: ": ";
  }
`;

export const Dd = styled.dd`
  display: inline;
  margin: 0;
`;
