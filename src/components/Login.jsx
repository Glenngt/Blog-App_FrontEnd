import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const[inputData,changeInputData] = useState(
        {
            "email":"",
            "pswd":""
        }
    )

    const InputHandler=(event)=>{
        changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
        axios.post("http://127.0.0.1:8000/api1/loginCheck/",inputData).then(
            (response)=>{
                console.log(response.data)
                if (response.data.length>0) {
                    
                    const getId = response.data[0].id
                    const getName = response.data[0].name

                    sessionStorage.setItem("id",getId)
                    sessionStorage.setItem("name",getName)

                    navigate('/Add')

                } else {

                    alert("Invalid Credentials.")
                    
                }
            }
        )
    }

  return (
    <div>
        
        <br></br>
        <div className="container">
            
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Email ID :</label>
                        <input type="text" className="form-control" name="email" value={inputData.email} onChange={InputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Password :</label>
                        <input type="password" name="pswd" id="" className="form-control" value={inputData.pswd} onChange={InputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button onClick={readValue} className="btn btn-success">LOGIN</button>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">New User?</label>
                        <a href="/Register">Click Here</a>
                    </div>
                </div>


                </div>
            </div>
    
        </div>

    </div>
  )
}

export default Login