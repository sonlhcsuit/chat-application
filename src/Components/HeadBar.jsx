import '../assets/css/Headbar.css'
// avatar of opposite

export function Headbar(props) {
    let avatar,name
    if(props.conversationInfo){
        avatar = props.conversationInfo.avatar
        name = props.conversationInfo.name
        // let {avatar,name} = 
    }
    return (
        <div className="headbar-area  headbar-cont">
            <img className="headbar-avatar" src={avatar} />
            <div className="headbar-title ">
                <h3>{name}</h3>
                <p> 12 hours ago</p>
            </div>

            <div className="headbar-tools ">
                <i className="fas fa-phone-alt "></i>
                <i className="fas fa-video "></i>
                <i className="fas fa-search "></i>
                <i className="fas fa-ellipsis-v "></i>
                <i class="fas fa-phone" aria-hidden="true" style={{fontWeight:100}}></i>
            </div>

        </div>
    )
}
