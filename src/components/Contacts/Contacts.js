import { nanoid } from 'nanoid';
export const Contacts = ({ dataValue: { contacts } }) => {
  
  return (
    <div>
      <ul>{contacts.map(contact =>
      <li key={contact.id}> {contact.name}: {contact.number}

      </li>
      
      )}</ul>
    </div>
  );
};
