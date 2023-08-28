type TextPropTypes = {
    text: string;
}


export function ErrorText(props: TextPropTypes) {
    return (
        <div className="text-red-700 text-xs mt-1">
            {props.text}
        </div>
    )
}

export const LabelText = (props: TextPropTypes) => {
    return(
        <span className="text-xs font-sans">
            { props.text}
        </span>
    )
}

export const ValuesText = (props: TextPropTypes) => {
    return(
        <span>
            { props.text }
        </span>
    )
}