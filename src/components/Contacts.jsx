import React, { Component } from 'react';
import ContactItem from './ContactItem.jsx';


class Contacts extends Component {
    
    render() {
        let filteredContacts = this.props.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(this.props.search.toLowerCase());
            }
        )
        let contactList = this.props.contacts.length ? (
            filteredContacts.map(contact => {
                return (
                    <ContactItem 
                    key={contact.id}
                    contacts={this.props.contacts}
                    name={contact.name}
                    email={contact.email}
                    username={contact.username}
                    website={contact.website}
                    phone={contact.phone}
                    hometown={contact.address.city}
                    />
                )
            })        

        ) : (
            <div className="center">Contacts list is empty</div>
        )
        return (
            <div>{contactList}</div>
        );
    }
}

export default Contacts