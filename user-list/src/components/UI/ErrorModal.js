import ReactDOM from 'react-dom';
import React from 'react';
import Card from './Card';
import Button from './Button';
import styles from './ErrorModal.module.css';

const BackDrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onButtonClick}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<BackDrop onClick={props.onClick} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onButtonClick={props.onButtonClick}
				/>,
				document.getElementById('overlay-root')
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
