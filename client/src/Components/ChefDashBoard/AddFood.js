import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
//import NavBar from '../Navbar/ChefNavBar';
import NavBar from '../Navbar/ChefNavbar'
const cookies = new Cookies();

function AddFood(props) {
	let token;

	//Check if user has cookie
	useEffect(() => {
		token = cookies.get('ka_token');
		if (token) return;
		return props.history.push('/login');
	});

	//console.log(`User data is ${props.location.state.userData}`)
	const [name, setFoodName] = useState('');
	const [description, setDescription] = useState([]);
	const [image, setImage] = useState('');
	const [price, setFoodPrice] = useState('');

	const onNameChange = (e) => setFoodName(e.target.value);
	// const onDescriptionChange = e => setDescription(description.map(e => [e.target.value]));
	//const onDescriptionChange = e => setDescription([e.target.value]);
	const onDescriptionChange = (e) => setDescription(description.concat(e.target.value));

	const onImageChange = (e) => setImage(e.target.value);
	const onPriceChange = (e) => setFoodPrice(e.target.value);

	const onSubmitHandler = (e) => {
		e.preventDefault();
		console.log(description);
		console.log(`Item added`);
		const itemInfo = {
			name,
			description,
			image,
			price,
		};
		fetch('http://localhost:3000/food/add', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(itemInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				let foodItem;
				document.getElementById('addProduct').reset();
				console.log(`Food data: ${JSON.stringify(data)}`);
				console.log(`food Name : ${data.name}`);
				foodItem = data.name;
				console.log(foodItem);
			})
			.catch((error) => console.log(error));
	};
	return (
		<div style={{ height: '100%' }}>
			<NavBar />
			<br />
			<div className="card bg-light">
				<article className="card-body mx-auto" style={{ maxWidth: '400px' }}>
					<h4 className="card-title mt-3 text-center">Add Item</h4>
					<form id="addProduct">
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{' '}
									<i className="fa fa-user" />{' '}
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Item Name"
								type="text"
								name="name"
								onChange={onNameChange}
							/>
						</div>{' '}
						{/* form-group// */}
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{' '}
									<i className="fa fa-envelope" />{' '}
								</span>
							</div>
							<input
								className="form-control"
								placeholder="Description"
								type="text"
								onChange={onDescriptionChange}
							/>
						</div>{' '}
						{/* form-group// */}
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{' '}
									<i className="fa fa-phone" />{' '}
								</span>
							</div>

							<input className="form-control" placeholder="image" type="text" onChange={onImageChange} />
						</div>{' '}
						{/* form-group// */}
						{/* form-group end.// */}
						<div className="form-group input-group">
							<div className="input-group-prepend">
								<span className="input-group-text">
									{' '}
									<i className="fa fa-lock" />{' '}
								</span>
							</div>
							<input className="form-control" placeholder="price" type="text" onChange={onPriceChange} />
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary btn-block" onClick={onSubmitHandler}>
								Add Item
							</button>
						</div>{' '}
						{/* form-group// */}
					</form>
				</article>
			</div>
			<ul>
				<li>{description}</li>
			</ul>
		</div>
	);
}

export default AddFood;
