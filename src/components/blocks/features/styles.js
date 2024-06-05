import styled from "styled-components";
import { Section } from "/src/components/styled";
import { P, Ul } from "/src/components/styled";
import Title from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";

export const StyledSection = styled(Section)`
  padding-top: 100px;
  padding-bottom: 100px;
`;

export const StyledTitle = styled(Title)`
  margin: 0 auto 64px;
  width: fit-content;
`;

export const StyledList = styled(Ul)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${(props) => props.theme.indent};
  margin-bottom: 64px;
`;

export const StyledItem = styled.li`
  padding: ${(props) => props.theme.indent};
  padding-right: 54px;
}
`;

export const FarmItem = styled(StyledItem)`
  background-color: ${(props) => props.theme.colorFeaturesFarmBg};
`;

export const ShopItem = styled(StyledItem)`
  background-color: ${(props) => props.theme.colorFeaturesShopBg};
`;

export const StyledButton = styled(Button)`
  margin: 0 auto;
`;
