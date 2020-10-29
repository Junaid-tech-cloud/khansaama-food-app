import React from 'react';
import { Link } from 'react-router-dom';



function MainPage(props) {
    return (
        <div>
        <section id="hero" className="d-flex align-items-center">
        <div className="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay={100}>
          <div className="row">
            <div className="col-lg-8">
              <h1>Welcome to <span>Khansaama</span></h1>
              <h2>Good Bye junk Food, Hello Healthy meals!</h2>
              <div className="btns">
                <button className="btn-menu animated fadeInUp scrollto"><Link to='/customerhomepage' >Buy Food</Link></button>
                <button className="btn-book animated fadeInUp scrollto"><Link to='/chefDashboard'>Sell Food </Link></button>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-delay={200}>
              
            </div>
          </div>
        </div>
      </section>{/* End Hero */}
        </div>
    );
}

export default MainPage;