import { useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
import styles from './AddUser.module.css';

const AddUser = (props) => {
	console.log('Render acquired!');
	const nameInputRef = useRef(null);
	const ageInputRef = useRef(null);

	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		const nameCurrent = nameInputRef.current;
		const ageCurrent = ageInputRef.current;

		const name = nameCurrent.value;
		const age = ageCurrent.value;
        
		if (name.trim().length !== 0 && age.trim() !== 0 && +age > 0) {
			props.onAddUser({ name: name, age: age });
			nameCurrent.value = '';
			ageCurrent.value = '';
		} else {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values)',
			});
		}
	};

	const onModalButtonClick = () => {
		setError(undefined);
	};

	return (
		<Wrapper>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onButtonClick={onModalButtonClick}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input id="username" type="text" ref={nameInputRef} />
					<label htmlFor="age">Age (Years)</label>
					<input id="age" type="number" ref={ageInputRef}></input>
					<Button type="submit">Add user</Button>
				</form>
			</Card>
		</Wrapper>
	);
};

export default AddUser;
