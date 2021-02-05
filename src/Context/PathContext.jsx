import { createContext } from "react";

const PathContext = createContext(null)

export function withPathContext(Component) {
    return (
        props => {
            return (
                <PathContext.Consumer>
                    {
                        (context)=>{
                            return (<Component {...props} context={context} />)
                        }
                    }
                </PathContext.Consumer>
            )
        }


    )
}
export { PathContext }