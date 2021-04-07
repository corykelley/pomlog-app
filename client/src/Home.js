import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { Button } from '@chakra-ui/button';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

Modal.setAppElement('#root');

function Home() {
	const [tasks, setTasks] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function openModal() {
		setModalIsOpen(true);
	}

	const closeModal = () => {
		setModalIsOpen(false);
	};

	const getTasks = () => {
		fetch(`/api/tasks/`)
			.then((res) => res.json())
			.then((data) => {
				setTasks(data.tasks);
				console.log(data.tasks);
			});
	};

	const taskSubmit = (method, data, id) => {
		closeModal();
		fetch(`/api/tasks/new/${id || ''}`, {
			method: method,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log(res.json());
			getTasks();
		});
	};

	const taskDelete = (id) => {
		fetch(`/api/tasks/${id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				getTasks();
			});
	};

	useEffect(() => {
		getTasks();
	}, []);

	// TODO: HOOK UP ADD TASK BUTTON IN LAYOUT/NAV!

	return (
		<>
			<TaskList tasks={tasks} taskDelete={taskDelete} />
			<Button onClick={openModal} colorScheme='teal' mr='4'>
				Add Task
			</Button>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel='Example Modal'
			>
				<AddTask taskSubmit={taskSubmit} />
				<Button colorScheme='teal' my='4' onClick={closeModal}>
					close
				</Button>
			</Modal>
		</>
	);
}

export default Home;
