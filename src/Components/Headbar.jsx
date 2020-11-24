import '../assets/css/Headbar.css'
// avatar of opposite
let data = {
    id: "01",
    name: "Pikachu",
    avtUrl: "https://st.gamevui.com/images/image/2019/03/20/pikachu-200.jpg",
    lastMessage: "Pika pika",
    inComming: true

}
export function Headbar() {
    return (
        <div className="headbar-area  headbar-cont">
            <img className="headbar-avatar" src={data.avtUrl} />
            <div className="headbar-title ">
                <h3>{data.name}</h3>
                <p> {data.lastMessage}</p>
            </div>

            <div className="headbar-tools ">
                <i className="fal fa-phone-alt fa-2x"></i>
                <i className="fal fa-video fa-2x"></i>
                <i className="fal fa-search fa-2x"></i>
                <i className="fal fa-ellipsis-v fa-2x"></i>

            </div>

        </div>
    )
}
