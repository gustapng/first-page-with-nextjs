import React, { forwardRef } from "react";
import NextLink from 'next/link';
import Text from "@src/components/Text/Text";
import { ThemeTypographyVariants } from "@src/theme/theme";
import {useTheme} from "@src/theme/ThemeProvider";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({
                                 href,
                                 children,
                                 colorVariant,
                                 styleSheet,
                                 colorVariantEnabled,
                                 ...props
                                  }:LinkProps, ref) => {

  const isExternalLink = href.startsWith('http');
  const theme = useTheme();

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400
    },
    focus: {
      color: theme.colors[colorVariant].x600
    }
  }

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...styleSheet,
      hover: {

        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
      focus: {

        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      }
    },
    ...props
  }

  if(isExternalLink) return (
    <Text
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true,
}

export default Link;
