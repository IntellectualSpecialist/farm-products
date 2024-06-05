import styled from "styled-components";

const Fieldset = styled.div`
  margin-bottom: 18px;
  padding: 24px 20px 26px;
  border: none;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 2px 6px 0 rgba(0, 0, 0, 0.04),
    0 10px 20px 0 rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);

  fieldset {
    padding: 0;
    border: 0;
    margin: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Fieldset;
