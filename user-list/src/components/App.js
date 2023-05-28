import { useState } from 'react';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';

export default function App() {
	const [users, setUsers] = useState([]);

	const addUserHandler = (user) => {
		user.id = Math.random();
		setUsers((prevUsers) => {
			return [...prevUsers, user];
		});
	};

	return (
		<>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={users} />
		</>
	);
}
