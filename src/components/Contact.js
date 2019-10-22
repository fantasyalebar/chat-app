import React from 'react';
import './Contact.css';





let Contact = (props) => {
    return (
        <div className="Contact">
            <img className="avatar" src={props.avatar} alt={props.character} />
            <div>
                <p className="name">{props.character}</p>
                {connection(props.online)}
            </div>
        </div>
    );
 }
 const connection = (param) => {
    if (param) {
    return (
        <div className='status'>
            <p className="status-text"><span className="status-online"></span>Online</p>
        </div >
    )
 } else {
    return (
        <div className="status">
            <p className="status-text"><span className="status-offline"></span>offline</p>
        </div>
    )
 }}
 // en haut on set up les "props" , en bas on définit un status-check //
 export default Contact;
 
 
 






