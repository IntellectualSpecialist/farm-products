import styled from "styled-components";
import { Img } from "/src/components/styled";

export const Header = styled.header`
  display: flex;
  column-gap: ${(props) => props.theme.indent};
  margin-bottom: ${(props) => props.theme.indent};
`;

export const StyledIcon = styled(Img)`
  flex-shrink: 0;
  width: 52px;
`;

export const Category = styled.span`
  margin-bottom: 4px;
  padding: 4px 10px;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.colorWhite};
`;

export const FeatureFarmCategory = styled(Category)`
  background-color: ${(props) => props.theme.colorFarmCategory};
`;

export const FeatureShopCategory = styled(Category)`
  background-color: ${(props) => props.theme.colorShopCategory};
`;
