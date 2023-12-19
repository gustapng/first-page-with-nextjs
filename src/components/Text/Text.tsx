import React from "react";
import Box from "@src/components/Box/Box";
import Theme from "@src/theme/theme";
import { StyleSheet } from "@src/theme/StyleSheet";
import theme from "@src/theme/theme";
import { BaseComponent } from "@src/theme/BaseComponent";

interface TextProps {
  variant?: 'display1';
  tag?: 'p' | 'li' | 'h1' | 'h2' | string;
  children?: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({
                             styleSheet,
                             variant,
                             ...props
                              }: TextProps) {

  const textVariant = theme.typography.variants[variant];

    return (
      <BaseComponent
        styleSheet={{
          fontFamily: Theme.typography.fontFamily,
          ...textVariant,
          ...styleSheet,
        }}
        {...props}
      />
    )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2',
}
