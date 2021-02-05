import "../assets/css/Modal.css"
export function Modal(props) {
    const { cancel } = props
    return (
        <div className="modal-container" >
            <div className="modal">
                <div className="modal-title">
                    <p>
                        {
                            props.title || 'This is title'
                        }
                    </p>
                    <i className="fa fa-times fa-2x" onClick={(e) => cancel(e)}></i>
                </div>
                <div className="modal-body">
                    {
                        props.children
                    }
                </div>
                <div className="modal-footer">
                    <input type="button" value="Cancel" onClick={(e) => cancel(e)} />
                </div>
            </div>
        </div>
    )
}