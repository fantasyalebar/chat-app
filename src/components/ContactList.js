import React from "react";
import Contact from "./Contact"

const List = [

{
    name: "La puipui frero",
    avatar:"https://randomuser.me/api/portraits/men/96.jpg",
    online: false,
}
,
{
    name: "La puipui frero",
    avatar:"https://randomuser.me/api/portraits/men/96.jpg",
    online: true,
}
,
{
    name: "La puipui frero",
    avatar:"https://randomuser.me/api/portraits/men/96.jpg",
    online: false,
}
,
{
    name: "La puipui frero",
    avatar:"https://randomuser.me/api/portraits/men/96.jpg",
    online: false,
}
,
{
    name: "La puipui frero",
    avatar:"https://randomuser.me/api/portraits/men/96.jpg",
    online: false,
}
]


const ContactList = () => (
    <div>
        {List.map(item => ( 
            <Contact online={item.online} avatar={item.avatar} character={item.name}/>
        )
        )}
        

    </div>
)


export default ContactList;