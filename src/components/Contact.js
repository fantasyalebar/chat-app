import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { online: props.online };
  }
  
  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <h4>{this.props.name}</h4>
          <div className="status">
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            ></div>
            <p
              onClick={event => {
                const newStatus = !this.state.online;
                this.setState({ online: newStatus });
              }}
            >
              {this.state.online ? "online" : "offline"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
{
  /* //     let Contact = (props) => { */
}

{
  /* 
//         return (
//             <div className="Contact">
//             <img className="avatar" src={props.avatar} alt={props.character} />
//             <div>
//                 <p className="name">{props.character}</p>
//                 {connection(props.online)}
//             </div>
//         </div>
//     );
// }
// const connection = (param) => { */
}
//     if (param) {
//         return (
//             <div className='status'>
//             <p className="status-text"><span className="status-online"></span>Online</p>
//         </div >
//     )
// } else {
//     return (
//         <div className="status">
//             <p className="status-text"><span className="status-offline"></span>offline</p>
//         </div>
//     )
// }}
// en haut on set up les "props" , en bas on définit un status-check //
export default Contact;
