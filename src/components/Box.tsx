import React from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";

interface BoxProps {
    // TODO - RESOLVER O ANY DEPOIS
    tag?: any;
    children?: React.ReactNode;
    styleSheet?: StyleSheet;
}

export default function Box({ styleSheet, children, tag, ...props }: BoxProps) {
    const Tag = tag || 'div';
    return (
        <BaseComponent as={tag} styleSheet={styleSheet} {...props}>
            {children}
        </BaseComponent>
    );
}