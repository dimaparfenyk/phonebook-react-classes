import {
  ContactListStyled,
  ContactItem,
  Button,
  NameText,
  NumberText,
} from "./ContactList.styled";

const ContactList = ({ contacts, onDeleteBtnClick }) => {
  return (
    <ContactListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <NameText>{name}</NameText>
          <NumberText>{number}</NumberText>
          <Button
            type="button"
            onClick={() => {
              onDeleteBtnClick(id);
            }}
          >
            X
          </Button>
        </ContactItem>
      ))}
    </ContactListStyled>
  );
};

export default ContactList;
