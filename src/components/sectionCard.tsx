'use client'
import { Card } from "@mantine/core"
import { ReactNode } from "react"

type CardProps = {
    onClick?: () => void;
    children: ReactNode;
}

export default function SectionCard( props:CardProps ) {
    return (
     

            <Card
                shadow="sm"
                padding="xl"
                className='border border-rose-200 rounded-lg'
                onClick={props.onClick}
            >
                {props.children}
            </Card>

    
    )
}