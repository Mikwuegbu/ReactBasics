import { useEffect, useState } from 'react';

function UseEffect() {
	const [count, setcount] = useState(0);
	const [color, setcolor] = useState('green');

	useEffect(() => {
		document.title = `Count: ${count} ${color}`;
	}, [count, color]);

	function addCount() {
		setcount((c) => c + 1);
	}

	function subCount() {
		setcount((c) => c - 1);
	}

	function changeColor() {
		setcolor((c) => (c === 'green' ? 'red' : 'green'));
	}

	return (
		<>
			<p style={{ color: color }}>Count : {count}</p>
			<button onClick={addCount}>Add</button>
			<button onClick={subCount}>Subtract</button>
			<br />
			<button onClick={changeColor}>Change color</button>
		</>
	);
}
export default UseEffect;
