import React from 'react';
import { List, Item, Button, Text } from './StyleItem';
import { TransitionGroup } from "react-transition-group";

const PhoneItem = ({ deleteTask, contacts }) => {
    return (
        <>
        <TransitionGroup component={List}>
            {/* <List> */}
            {
                contacts.map((contact) => 
                    <Item key={contact.id} in={true} appear={true} >
                        <Text>{contact.name}: {contact.number}</Text>
                        <Button onClick={() => deleteTask(contact.id)}>Delete</Button>
                    </Item>
                )
            }
            {/* </List> */}
            </TransitionGroup>
        </>
    );
};

export default PhoneItem;