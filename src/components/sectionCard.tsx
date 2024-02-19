'use client'
import { Card } from "@mantine/core"
import { ReactNode } from "react"

type CardProps = {
    onClick?: () => void;
    children: ReactNode;
}

export default function SectionCard(props: CardProps) {
    return (


        <Card
            className='border border-rose-200'
            onClick={props.onClick}
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
        >
            {props.children}
        </Card>
    )
}