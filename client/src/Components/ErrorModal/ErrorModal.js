import React, { useState } from 'react';


const ErrorModal = props =>{

    return(
        <div className="container">
  {/* Button to Open the Modal */}
  {/* The Modal */}
  
    <div className="modal-dialog">
      <div className="modal-content">
        {/* Modal Header */}
        <div className="modal-header">
          <h4 className="modal-title">An Error Occured</h4>
          <button type="button" className="close">
          ×
          </button>
        </div>
        {/* Modal body */}
        <div className="modal-body">
          Email Already Exists
        </div>
        {/* Modal footer */}
        <div className="modal-footer">
          <button type="button" className="btn btn-danger" >
          Close
          </button>
        </div>
      </div>
    </div>
  </div>
    )
    
}

export default ErrorModal;