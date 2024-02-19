'use client'

import { Accordion, AccordionValue } from "@mantine/core";
import { ReactNode } from "react";


type AccordionPropsTypes = {
    chevron?: ReactNode;
    chevronPosition?: "left" | "right";
    chevronSize?: string | number;
    children: ReactNode;
    defaultValue?: string | string[];
    disableChevronRotation?: boolean;
    id?: string;
    loop?: boolean;
    multiple?: boolean;
    onChange: ((value: AccordionValue<Multiple>) => void);
    radius?: number | "xs" | "sm" | "md" | "lg" | "xl";
    transitionDuration?: number;
    value: string | string[];
    variant?: "default" | "contained" | "filled" | "separated";
}

type AccordionControlPropsTypes = {
    chevron?: ReactNode;
    children: ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
}

type AccordionItemPropsTypes = {
    value: string;
    children: ReactNode;
}

type AccordionPanelPropsTypes = {
    children: ReactNode;
}

type AccordionCombinedPropsTypes = (
    AccordionPropsTypes | AccordionControlPropsTypes | AccordionItemPropsTypes | AccordionPanelPropsTypes
)

export default function MyAccordion(props: AccordionPropsTypes) {
    return(
        <Accordion
        chevron={props.chevron}
        chevronPosition={props.chevronPosition}
        chevronSize={props.chevronSize}
        disableChevronRotation={props.disableChevronRotation}
        id={props.id}
        loop={props.loop}
        multiple={props.multiple}
        onChange={props.onChange}
        radius="lg"
        transitionDuration={100}
        value={props.value}
        variant="default"
        >
            { props.children }
        </Accordion>
    )
}


export const AccordionItem = (props: AccordionItemPropsTypes) => {
    return(
        <Accordion.Item value={props.value}>
            { props.children }
        </Accordion.Item>
    )
}

export const AccordionControl = (props: AccordionControlPropsTypes) => {
    return(
        <Accordion.Control
        chevron={props.chevron}
        disabled={props.disabled}
        icon={props.icon}
        > { props.children } </Accordion.Control>
    )
}

export const AccordionPanel = (props: AccordionPanelPropsTypes) => {
    return(
        <Accordion.Panel>
            { props.children}
        </Accordion.Panel>
    )
}