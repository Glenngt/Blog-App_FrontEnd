import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'
import axios from 'axios'

const ViewAllPost = () => {

    const[data,changeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/api/viewAll/").then(
            (response)=>{
                changeData(response.data)
            }
        )
    }

    useEffect(()=>{fetchData()},[])

  return (
    <div>
        <BlogHeader/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div className="row g-3">
                    {data.map(
                        (value,index)=>{
                            return <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div class="card mb-3">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                        </div>
                                        <div class="col-md-8">
                                        <div class="card-body">
                                            <p class="card-text">{value.userid}</p>
                                            <h5 class="card-title">{value.title}</h5>
                                            <p class="card-text">{value.msg}</p>
                                        </div>
                                        </div>
                                    </div>
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

export default ViewAllPost