import { useState } from 'react';

function MyComponent() {
	const [name, setName] = useState('Guest');
	const [age, setAge] = useState(0);
	const [isEmployed, setisEmployed] = useState(false);

	const updateName = () => {
		setName('Mark');
	};
	const incrementAge = () => {
		setAge(age + 2);
	};

	const toggledEmployedStatus = () => {
		setisEmployed(!isEmployed);
	};
	return (
		<>
			<p>Name:{name}</p>
			<button onClick={updateName}>Set Name</button>
			<p>Name:{age}</p>
			<button onClick={incrementAge}>Increment Age</button>
			<p>Is employed:{isEmployed ? 'Yes' : 'No'}</p>
			<button onClick={toggledEmployedStatus}>Toggle Status</button>
		</>
	);
}
export default MyComponent;
