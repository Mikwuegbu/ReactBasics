import { useState } from 'react';

function ArrayUpdate() {
	const [foods, setfoods] = useState(['Apple', 'Orange', 'Banana']);

	function handlerAddFood() {
		const newFood = document.getElementById('foodInput').value;
		document.getElementById('foodInput').value = '';

		setfoods((f) => [...f, newFood]);
	}
	function handlerRemoveFood(index) {
		setfoods(foods.filter((element, i) => i !== index));
	}

	return (
		<>
			<div>
				<h2>List of Foods</h2>
				<ul>
					{foods.map((food, index) => (
						<li key={index} onClick={() => handlerRemoveFood(index)}>
							{food}
						</li>
					))}
				</ul>
				<input type="text" id="foodInput" placeholder="Enter food name" />
				<button onClick={handlerAddFood}>Add food</button>
			</div>
		</>
	);
}
export default ArrayUpdate;
