import { PathContext } from "../Context/PathContext";
function Link(props) {
    return (
        <PathContext.Consumer>
            {
                ({ navigate }) => {
                    return (
                        <a onClick={() => navigate(props.path)} >
                            {props.children}
                        </a>
                    )
                }
            }
        </PathContext.Consumer>
    )
}
export { Link }