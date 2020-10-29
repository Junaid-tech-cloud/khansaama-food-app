import React from 'react';

function FoodCard(props) {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Biryani_Home.jpg/1200px-Biryani_Home.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Buryani</h5>
          <p className="card-text">Best Biryani in Pakistan.</p>
          <a href="#" className="btn btn-primary">Details</a>
        </div>
      </div>
    );
}

export default FoodCard;                            