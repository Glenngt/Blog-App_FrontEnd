import React, { useState } from 'react'
import BlogHeader from './BlogHeader'
import axios from 'axios'

const AddPost = () => {
    
  const[addData,changeAddData]=useState(
    {
      "userid" : sessionStorage.getItem("id"),
      "title" : "",
      "msg" : ""
  }
)

const AddHandler=(event)=>{
    changeAddData({...addData,[event.target.name]:event.target.value})
}

const addValue=()=>{
    console.log(addData)
    axios.post("http://127.0.0.1:8000/api/add/",addData).then(
        (response)=>{
            alert(response.data.Status)
        }
    )
}


  return (
    <div>
        
        <BlogHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Title :</label>
                        <input type="text" className="form-control" name="title" value={addData.title} onChange={AddHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        
                        <label htmlFor="" className="form-label">Message/Post :</label>
                        <textarea name="msg" id="" cols="30" rows="10" className="form-control" value={addData.msg} onChange={AddHandler} ></textarea>

                    </div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={addValue} className="btn btn-primary">POST</button>
                        </div>
                    </div>
                </div>


                </div>
            </div>
        </div>


    </div>
  )
}

export default AddPost