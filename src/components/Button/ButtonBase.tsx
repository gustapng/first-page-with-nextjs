import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "@src/components/Text/Text";
import React from "react";
// TODO RESOLVER ESSA LIB
import { useRipple } from 'react-ripples';
import { useRef } from 'react'

const StyledButton = styled(Text)<any>`
    
`;

interface ButtonBase {
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
}
export default function ButtonBase({
  children,
  textVariant,
  ...props
 }: ButtonBase) {
  const ref = React.useRef();
  useRipple(ref);
  const Tag = 'button';

  return (
    <StyledButton as={Tag} {...props}>
      {children}
    </StyledButton>
  );
}
