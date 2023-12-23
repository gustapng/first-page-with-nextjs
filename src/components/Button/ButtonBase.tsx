import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from "styled-components";
import Text from "@src/components/Text/Text";
import React from "react";
import Ripples, {createRipples} from 'react-ripples';
import { useRef } from 'react'
import {StyleSheet} from "@src/theme/StyleSheet";
import {useRouter} from "next/router";

// [Composição atual]
// Button: tag
// Text: tag
// BaseComponent: tag
// StyledComponent

const StyledButton = styled(Text)<any>`
    border: none;
`;

export interface ButtonBaseProps {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function ButtonBase({
  children,
  textVariant,
  styleSheet,
  href,
  ...props
 }: ButtonBaseProps ) {
  const router = useRouter();
  const ref = React.useRef();
  const isLink = Boolean(href);
  const Tag = isLink ? 'a' : 'button';

  return (
    <Ripples color="#fff" placeholder={undefined}>
      <StyledButton
        ref={ref}
        tag={Tag}
        href={href}
        styleSheet={{
          backgroundColor: 'transparent',
          color: 'inherit',
          outline: '0',
          cursor: 'pointer',
          textDecoration: 'none',
          border: 0,
          ...styleSheet
        }}
        onClick={(event) => {
          isLink && event.preventDefault();
          isLink && router.push(href);
          !isLink && props.onClick && props.onClick(event);
        }}
        {...props}
      >
        {children}
      </StyledButton>
    </Ripples>


  );
}
