import { useState } from 'react';

function Onchange() {
	const [name, setname] = useState('Guest');
	const [quantity, setquantity] = useState(1);
	const [comment, setComment] = useState('');
	const [shipping, setshipping] = useState('Pick up');

	const handlenameChange = (event) => {
		setname(event.target.value);
	};

	function quantityChange(e) {
		setquantity(e.target.value);
	}

	function handleCommentCange(e) {
		setComment(e.target.value);
	}

	const handleDelivery = (e) => {
		setshipping(e.target.value);
	};

	return (
		<>
			<div>
				<input value={name} onChange={handlenameChange} />
				<p>Name: {name}</p>
				<input value={quantity} onChange={quantityChange} type="number"></input>
				<p>Quantity : {quantity}</p>

				<textarea
					value={comment}
					onChange={handleCommentCange}
					placeholder="Enter delivery instructions"
				></textarea>
				<p>Comment:{comment} </p>

				<label>
					<input
						type="radio"
						value="Pick up"
						checked={shipping === 'Pick up'}
						onChange={handleDelivery}
					/>{' '}
					Pick up
				</label>
				<br />
				<label>
					<input
						type="radio"
						value="Delivery"
						checked={shipping === 'Delivery'}
						onChange={handleDelivery}
					/>{' '}
					Delivery
				</label>
				<p>Shipping: {shipping}</p>
			</div>
		</>
	);
}
export default Onchange;
