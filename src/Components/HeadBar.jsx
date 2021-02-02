import '../assets/css/HeadBar.css'
// avatar of opposite

export function HeadBar(props) {
    let avatar, name
    console.log(props)
    if (props.conversationInfo) {
        avatar = props.conversationInfo.participants.avatar
        name = props.conversationInfo.participants.name
        // let {avatar,name} = 
    }
    return (
        <div className="headbar-area  headbar-cont">
            <img className="headbar-avatar" src={avatar} />
            <div className="headbar-title ">
                <h2>{name}</h2>
            </div>

            <div className="headbar-tools ">
                <i className="fas fa-phone-alt "></i>
                <i className="fas fa-video "></i>
                <i className="fas fa-search "></i>
                <i className="fas fa-ellipsis-v "></i>
            </div>

        </div>
    )
}
