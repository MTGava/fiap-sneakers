export default function Title(props) {

    return (
        <h2 className="text-x1 font-semibold border-rose-600 border-l-4 m-2 pl-2">
            {props.children}
        </h2>
    )
}