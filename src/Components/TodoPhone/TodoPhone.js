import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import Form from "../Form/Form";
import FilterForm from "../FilterForm/FilterForm";
import PhoneItem from "../PhoneItem/PhoneItem";
import { useDispatch, useSelector } from "react-redux";
// import { addItem, deleteItem, setItem } from '../../redux/action/todoList';
import { addItem, deleteItem, setItem } from '../../redux/toolkit/action/todoList';
import { v4 as uuidv4 } from 'uuid';
import { Title, Div } from './StyleTodoPhone';

const TodoPhone = () => {
	const [error, setError] = useState('');
	const filterValue = useSelector((state) => state.filter);
	console.log(filterValue);
	const contacts = useSelector((state) => state.todoList);
	console.log(contacts);
	const dispatch = useDispatch();
	
	useEffect(() => {
		const perslistedContacts = localStorage.getItem("contacts")
		if (perslistedContacts) {
			dispatch(setItem((JSON.parse(perslistedContacts))))
		}
	}, [dispatch])

	useEffect(() => {
		localStorage.setItem("contacts", JSON.stringify(contacts))
	})
	useEffect(() => {
		if (!!error) {
			setTimeout(() => {
				setError(false)
			}, 1000)

		}
	}, [error])

	const addTask = (name, number) => {
		const contact = {
			name,
			number,
			id: uuidv4()
		}
		if (!name) {
			return
		}
		if (contacts.every((contact) => !contact.name.includes(name))) {
			dispatch(addItem(contact))
		} else {
			setError(`${name} is already in contacts`)
		}
	}

	const deleteTask = (id) => {
		dispatch(deleteItem(id))
	}

	const searchItem = () => {
		return contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
		// if (filter.length > 0) {
		// } else return contacts
	}

	return (
		<>
			<Div in={!!error}>
				<p>{error}</p>
			</Div>
			<Title in={true} appear={true}>
				Phonebook
			</Title>
			<Form addTask={addTask} contacts={contacts} />
			<Section title={"Contacts:"}>
				{contacts.length > 1 && <FilterForm />}
				<PhoneItem deleteTask={deleteTask} contacts={searchItem().length > 0 ? searchItem() : contacts} />
			</Section>
		</>
	)
}

export default TodoPhone
