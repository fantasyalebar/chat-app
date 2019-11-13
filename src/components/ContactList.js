import React from "react";
import Contact from "./Contact";

const list = [
  {
    name: "La puipui frero",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    online: false,
    id: 1
  },
  {
    name: "La puipui frero",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
    online: true,
    id: 2
  },
  {
    name: "La puipui frero",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
    online: false,
    id: 3
  },
  {
    name: "La puipui frero",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    online: false,
    id: 4
  },
  {
    name: "La puipui frero",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
    online: true,
    id: 5
  }
];

console.log(list);

const ContactList = () => (
    list.map(item => (
			
      <Contact
        online={item.online}
        avatar={item.avatar}
        name={item.name}
				key={item.id}
				
      />
		))
)

console.log('tata', ContactList());

export default ContactList;
