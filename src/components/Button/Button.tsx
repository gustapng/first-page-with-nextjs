import ButtonBase, {ButtonBaseProps} from "@src/components/Button/ButtonBase";
import React from "react";
import theme from "@src/theme/theme";
import {ColorVariant, colorVariantBy, Variant} from "@src/components/Button/colorVariantBy";
import {useTheme} from "@src/theme/ThemeProvider";
import {ButtonSize, buttonSize} from "@src/components/Button/ButtonSize";

interface ButtonProps extends ButtonBaseProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}
// TODO RESOLVER O fullWidth
export default function Button({
  styleSheet,
  children,
  fullWidth,
  colorVariant,
  variant,
  size,
}: ButtonProps ) {
  const theme = useTheme();
  return (
    <ButtonBase
      styleSheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        // [Size]
        ...buttonSize[size],
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...styleSheet,
      }}
    >
      {children}
    </ButtonBase>
  );
}

Button.defaultProps = {
  fullWidth: false,
  size: 'sm',
  variant: 'contained',
  colorVariant: 'positive'
}

Button.Base = ButtonBase;
