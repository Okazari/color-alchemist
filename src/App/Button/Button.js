import styled from "styled-components";
import {
  bottomBorderGradient,
  boxShadow1,
  fontSize,
  fontWeight,
  primaryDark1,
  primaryDark2,
  radius,
  containerGradient,
  primary,
  primaryLight1,
  boxShadow2,
} from "../../styles";

const ButtonContainer = styled.button`
  transition: all 200ms;
  margin: 10px;
  margin-top: 40px;
  padding: 0;
  padding-bottom: 10px;
  border-radius: ${radius};
  box-shadow: ${boxShadow1};
  border: 0;
  cursor: pointer;
  background-image: ${bottomBorderGradient(primaryDark1, primaryDark2)};

  &:hover {
    transform: translate(0, -5px) scale(1.05);
    box-shadow: ${boxShadow2};
  }
`;

const ButtonInner = styled.div`
  border: none;
  border-radius: ${radius};
  padding: 20px;
  font-weight: ${fontWeight};
  font-size: ${fontSize};
  background-image: ${containerGradient(primary, primaryLight1)};
  color: rgba(0, 0, 0, 0.8);
`;

const Button = ({ children, ...props }) => (
  <ButtonContainer {...props}>
    <ButtonInner>{children}</ButtonInner>
  </ButtonContainer>
);

export default Button;
