import React from "react";
import { nanoid } from "nanoid";
import { Box, Button, Form, Input, Label } from "./ContactForm.styled";

const ContactForm = ({ onSubmit }) => {
  const nameInputId = nanoid();
  const numberInputId = nanoid();

  return (
    <>
      <h2>Телефонная книга</h2>
      <Form onSubmit={onSubmit}>
        <Box>
          <Label htmlFor={nameInputId}>
            Name
            <Input
              id={nameInputId}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label htmlFor={numberInputId}>
            Number
            <Input
              id={numberInputId}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
        </Box>
        <Button type="submit">Добавить контакт</Button>
      </Form>
    </>
  );
};

export default ContactForm;
