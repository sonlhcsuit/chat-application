import { createContext } from "react";

const ConversationContext = createContext(null)

export function withConversationContext(Component) {
    return (
        props => {
            return (
                <ConversationContext.Consumer>
                    {
                        (context) => {
                            return (<Component {...props} context={context} />)
                        }
                    }
                </ConversationContext.Consumer>
            )
        }


    )
}
export { ConversationContext }