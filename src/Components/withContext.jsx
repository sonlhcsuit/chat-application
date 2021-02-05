export function withContext(Component,Context) {
    return (
        <Context.Consumer>
            {
                <Component/>
            }
        </Context.Consumer>
    )
}