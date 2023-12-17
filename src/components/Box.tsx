import React from "react";

interface StyleSheet {
    fontFamily: string;
    backgroundColor: string;
}

interface BoxProps {
    // TODO - RESOLVER O ANY DEPOIS
    tag: any;
    children: React.ReactNode;
    styleSheet: StyleSheet;
}

export default function Box({ styleSheet, children, tag }: BoxProps) {
    const Tag = tag || 'div';
    return (
        <Tag style={styleSheet}>
            {children}
        </Tag>
    );
}