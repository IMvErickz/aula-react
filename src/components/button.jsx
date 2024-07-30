export function Button(props) {
    return (

        // eslint-disable-next-line react/prop-types
        <button {...props}>{props.text}</button>
    )
}