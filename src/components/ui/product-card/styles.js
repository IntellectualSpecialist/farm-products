import styled from "styled-components";
import { Img } from "/src/components/styled";
import Title from "/src/components/ui/title/title";

export const CardWrapper = styled.article`
  display: flex;
  gap: ${(props) => props.theme.indent};
  height: 288px;
  padding: ${(props) => props.theme.indent};
  background-color: ${(props) => props.theme.colorWhite};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Image = styled(Img)`
  width: 248px;
  height: 248px;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  font-size: 14px;
  line-height: 21px;
  overflow-y: overlay;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 16px;
`;
