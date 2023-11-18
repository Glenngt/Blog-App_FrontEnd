import axios from 'axios'
import React, { useState } from 'react'

const Register = () => {
    
  const[registerData,changeRegisterData]=useState(
    {
      "name" : "",
      "pic" : "",
      "email" : "",
      "pswd" : ""
  }
)

const RegisterHandler=(event)=>{
    changeRegisterData({...registerData,[event.target.name]:event.target.value})
}

const regValue=()=>{
    console.log(registerData)
    axios.post("http://127.0.0.1:8000/api1/add/",registerData).then(
        (response)=>{
            alert(response.data.Status)
        }
    )
}

  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Name :</label>
                        <input type="text" className="form-control" name="name" value={registerData.name} onChange={RegisterHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Profile Pic :</label>
                        <input type="text" className="form-control" name="pic" value={registerData.pic} onChange={RegisterHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Email Id :</label>
                        <input type="text" className="form-control" name="email" value={registerData.email} onChange={RegisterHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Password :</label>
                        <input type="password" name="pswd" id="" className="form-control" value={registerData.pswd} onChange={RegisterHandler} />

                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={regValue} className="btn btn-primary">REGISTER</button>
                        </div>
                    </div>
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <a href="/">Back To Login</a>

                    </div>
                </div>


                </div>
            </div>
        </div>

    </div>
  )
}

export default Register