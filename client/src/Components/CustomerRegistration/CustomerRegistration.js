import React,{ useState, Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ErrorModal from '../ErrorModal/ErrorModal';
import Cookies from 'universal-cookie';
 
const cookies = new Cookies();



class CustomerRegistration extends Component {

  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      lat: "",
      lng: ""
      
    };
  
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition((position) => {
      var crd = position.coords;
    
      this.setState({ lat: crd.latitude, lng: crd.longitude});

    },
    (err) => { console.error(`ERROR(${err.code}): ${err.message}`)},
    options);
  }

  onChange = e => {
    console.log(`Value is :${e.target.value}`);
        this.setState({ [e.target.name]: e.target.value });
      }


      onSubmit = e =>{
        e.preventDefault();

        console.log(`Form submitted`)
          
      // const url = "http://localhost:3000/user/signUp";
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        lat: this.state.lat,
        lng: this.state.lng,
        role: this.state.role
   }

   fetch("http://localhost:3000/user/signUp",
     {
       method: "POST",
       headers: {
        'Content-Type': 'application/json'
      },
       body: JSON.stringify(newUser)
     }
   )
   .then(res => res.json())
   .then(data => {
    cookies.set('ka_token', data.token, { path: '/' });
    let dashboardRoute = data.user.role === "customer" ? "/home": "/dashboard";
    return  this.props.history.push({
      pathname: dashboardRoute,
      state: { userData: data }
    });
   })
   .catch(err => {
     console.log(`Error while signing in..${err}`);
     return this.props.history.push('/register');
   })

    }



  render() {
    
  return (
                  <div>
                   <div className="container">
                  
                  <div className="card bg-light">
                    <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
                      <h4 className="card-title mt-3 text-center">Create Account</h4>
                      <form>
                        <div className="form-group input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user" /> </span>
                          </div>
                          <input className="form-control" placeholder="Full name" type="text"
                          onChange = {this.onChange}  name="name"/>
                        </div> {/* form-group// */}
                        <div className="form-group input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
                          </div>
                          <input  className="form-control" placeholder="Email address" type="email"
                          onChange = {this.onChange} name="email"/>
                        </div> {/* form-group// */}
                        <div className="form-group input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone" /> </span>
                          </div>  
                         
                          <input  className="form-control" placeholder="Phone number" type="text"
                          onChange = {this.onChange}  name="phone"/>
                        </div> {/* form-group// */}
                        
                        {/* form-group end.// */}
                <div className="form-group input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                          </div>
                          <input className="form-control" placeholder="Create password" type="password" 
                          onChange = {this.onChange} name="password"/>
                        </div>
                        
          
                          <div style={{display:"grid", gridTemplateColumns:"1fr"}}>
                          <p>I am registering as a :</p>
                          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", rowGap:"10px"}}>
                          <div>
                          <input type="radio" name="role" value="customer" onChange= {this.onChange}/>
                          <label style={{marginLeft:"10px"}}>Foodie</label>
                          </div>
                          <div>
                          <input type="radio" name="role" value="chef" onChange= {this.onChange}/>
                          <label style={{marginLeft:"10px"}}>Chef</label>
                          </div>
                          </div>
                        </div>                                     
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-block"
                          
                          onClick= {this.onSubmit}>
                          Create Account 
                          </button>
                        </div> {/* form-group// */}      
                        <Link to = '/login'>Have an account? Log In </Link>                                                                 
                      </form>
                    </article>
                  </div> {/* card.// */}
               </div> 
              
                {/*container end.//*/}
              
       </div>
       
      );
      
              
            

          }

    // const  mapStateToProps = state => {
    //   return {
    //     errorOccured: state.isError
    //   }
    // }
    
    // const  mapDispatchToProps = dispatch => {
    //   return {
    //     onErrorOccured: () =>  dispatch({type: "ERROR_OCCURED"})
        
    //   }
    // }

  }
export default CustomerRegistration

  
