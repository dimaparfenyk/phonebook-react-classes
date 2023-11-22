import React, { Component } from "react";
import { nanoid } from "nanoid";

import Section from "../Section";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { Title } from "../Section/Section.styled";
import { Wrapper } from "./Contacts.styled";
import Modal from "../Modal";
import IconButton from "../IconButton";
import { ReactComponent as AddIcon } from "../../icons/plus.svg";

class Contacts extends Component {
  state = {
    contacts: [],
    filter: "",
    modalShown: false,
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    this.setState({ contacts: savedContacts || [] });
  }

  componentDidUpdate(prevprops, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem("contacts", JSON.stringify(nextContacts));
    }

    if (nextContacts.length > prevContacts.length && this.state.modalShown) {
      this.toggleModal();
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const name = e.currentTarget.elements["name"].value;
    const number = e.currentTarget.elements["number"].value;
    const id = nanoid();
    const user = { id, name, number };

    this.addContact(user);

    e.currentTarget.reset();
  };

  onFilterChange = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  addContact = (user) => {
    const normalizedUserName = user.name.toLowerCase().trim();

    const isContactAdded = this.state.contacts.some(
      ({ name }) => name.toLowerCase().trim() === normalizedUserName
    );

    !isContactAdded
      ? this.setState((prevState) => ({
          contacts: [...prevState.contacts, user],
        }))
      : alert(`${user.name} уже есть в телефонной книге`);
  };

  deleteContact = (userId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== userId),
    }));
  };

  toggleModal = () => {
    this.setState(({ modalShown }) => ({
      modalShown: !modalShown,
    }));
  };

  render() {
    const { contacts, filter, modalShown } = this.state;
    const normalizedFilter = filter.toLowerCase();

    const filteredContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Section title={"Телефонная книга"}>
          <Wrapper>
            <IconButton onClick={this.toggleModal} className={"addIcon"}>
              <AddIcon width={32} height={32} />
              Добавить контакт
            </IconButton>
            <Title>Контакты</Title>
            <ContactList
              contacts={filteredContacts}
              onDeleteBtnClick={this.deleteContact}
            />
            <Filter contacts={contacts} onChange={this.onFilterChange} />
          </Wrapper>
        </Section>
        {modalShown && (
          <Modal onClose={this.toggleModal}>
            <ContactForm onSubmit={this.handleSubmit} />
          </Modal>
        )}
      </>
    );
  }
}

export default Contacts;
