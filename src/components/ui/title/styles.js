import styled from "styled-components";
import { H1 } from "/src/components/styled";
import { TitleSize } from "./title";

export const StyledTitle = styled(H1)`
  ${(props) => {
    switch (props.$size) {
      case TitleSize.LARGE:
        return `font-size: 44px;
          line-height: 51px;`;
      case TitleSize.BIG:
        return `font-size: 36px;
        line-height: 41px;`;
      case TitleSize.MIDDLE:
        return `font-size: 32px;
        line-height: 37px;`;
      case TitleSize.SMALL:
        return `font-size: 24px;
        line-height: 31px;`;
    }
  }}
`;
