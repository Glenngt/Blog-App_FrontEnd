import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'
import axios from 'axios'

const UserProfile = () => {

    const[profileData,changeProfileData] = useState(
        {
            "id": sessionStorage.getItem("id"),
            "name":"",
            "pic":"",
            "email":""
        }
    )

    const ProfileHandler =(event)=>{
        changeProfileData({...profileData,[event.target.name]:event.target.value})
    }

    const profileValue=()=>{
        console.log(profileData)
        axios.post("http://127.0.0.1:8000/api1/userProfile/",profileData).then(
            (response)=>{
                changeResult(response.data)
            }
        )
    }

    const[result,changeResult] = useState([])

    useEffect(()=>{profileValue()},[])

  return (
    <div>
        
        <BlogHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        
                    </div>
                <br></br>
                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
    
                           {result.map(
                            (value,index)=>{
                                return    <div class="card">
                                <img src={value.pic} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">{value.name}</h5>
                                    <p class="card-text">{value.email}</p>
                                </div>
                                </div>
                            }
                           )}
        
                                </div>
                </div>
        </div>

    </div>

    </div>
  )
}

export default UserProfile