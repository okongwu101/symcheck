
type accordionTextProps = {
    title?: string;
    content?: string;
}


export const AccordionTexts = (props: accordionTextProps) => {
    return(
        <div>
            <p className="font-sans font-medium text-sm md:text-base text-gray-950">{props.title}</p>
<p className="font-mono text-xs md:text-sm text-justify leading-loose text-sky-950">{props.content}</p>
        </div>
    )
}