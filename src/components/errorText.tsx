type ErrorTextPropTypes = {
    message: string;
}


export default function ErrorText(props: ErrorTextPropTypes) {
    return (
        <div className="text-red-700 text-xs mt-1">
            {props.message}
        </div>
    )
}