import React, {forwardRef} from "react";
import NextLink from 'next/link';
import Text from "@src/components/Text/Text";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}
const Link = React.forwardRef(({ href, children, ...props }:LinkProps, ref) => {
  const isExternalLink = href.startsWith('http');

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    ...props
  }
//console.log(linkProps)
  if(isExternalLink) return <Text {...linkProps} />

  return (
    <NextLink href={href} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

export default Link;
