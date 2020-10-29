import React from 'react';
import FoodCard from '../Cards/FoodCard';
//import NavBar from '../Navbar/ChefNavBar';
import NavBar from "../Navbar/ChefNavbar"
function Dashboard(props) {
	return (
		<div>
			<NavBar />
			<br />
			<div className="row" style={{ marginLeft: '10px' }}>
				<div className="col-md-4">
					<div className="card text-white bg-primary mb-3" style={{ maxWidth: '18rem' }}>
						<div className="card-header">Orders</div>
						<div className="card-body">
							<h5 className="card-title">Total Orders : 50</h5>
						</div>
					</div>
                </div>
                <div className="col-md-4">
					<div className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
						<div className="card-header">Sales</div>
						<div className="card-body">
							<h5 className="card-title">Total Sales : $1500</h5>
						</div>
					</div>
                </div>
                <div className="col-md-4">
					<div className="card text-white bg-success mb-3" style={{ maxWidth: '18rem' }}>
						<div className="card-header">Dishes</div>
						<div className="card-body">
							<h5 className="card-title">Total Dishes : 5</h5>
						</div>
					</div>
                </div>
				
			</div>
			<div className="row" style={{ marginLeft: '10px' }}>
				<div className="col-md-4">
					<FoodCard />
				</div>
				<div className="col-md-4">
					<FoodCard />
				</div>
				<div className="col-md-4">
					<FoodCard />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
