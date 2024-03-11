import { useState } from 'react';

function ObjectUpdate() {
	const [cars, setcars] = useState([]);
	const [carYear, setCarYear] = useState(new Date().getFullYear());
	const [carMake, setCarMake] = useState('');
	const [carModel, setcarModel] = useState('');

	function handlerAddCar() {
		const newCar = {
			year: carYear,
			make: carMake,
			model: carModel,
		};

		setcars([...cars, newCar]);
		setCarYear(new Date().getFullYear());
		setCarMake('');
		setcarModel('');
	}
	function handlerRemoveCar(index) {
		setcars((c) => c.filter((_, i) => i !== index));
	}
	function handlerYearChange(event) {
		setCarYear(event.target.value);
	}
	function handleMakeChange(event) {
		setCarMake(event.target.value);
	}
	function handlerModelChange(event) {
		setcarModel(event.target.value);
	}

	return (
		<>
			<div>
				<h2>List of Car Objects</h2>
				<ul>
					{cars.map((car, index) => (
						<li key={index} onClick={() => handlerRemoveCar(index)}>
							{car.year} {car.make} {car.model}
						</li>
					))}
				</ul>
				<input type="number" value={carYear} onChange={handlerYearChange} />
				<br />
				<input
					type="text"
					value={carMake}
					onChange={handleMakeChange}
					placeholder="Enter car Make"
				/>
				<br />
				<input
					type="text"
					value={carModel}
					onChange={handlerModelChange}
					placeholder="Enter Car Model"
				/>
				<br />
				<button onClick={handlerAddCar}>Add Car</button>
			</div>
		</>
	);
}
export default ObjectUpdate;
