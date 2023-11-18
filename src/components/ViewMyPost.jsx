import React, { useEffect, useState } from 'react'
import BlogHeader from './BlogHeader'
import axios from 'axios'

const ViewMyPost = () => {

  const[searchData,changeSearchData] = useState(
    {
        "userid": sessionStorage.getItem("id")
    }
)

const SearchHandler =(event)=>{
    changeSearchData({...searchData,[event.target.name]:event.target.value})
}

const searchValue=()=>{
    console.log(searchData)
    axios.post("http://127.0.0.1:8000/api/view/",searchData).then(
        (response)=>{
            changeResult(response.data)
        }
    )
}

const[result,changeResult] = useState([])

useEffect(()=>{searchValue()},[])


  return (
    <div>
        
        <BlogHeader/>

        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        
                    </div>
                <br></br>
                {result.map(
                  (value,index)=>{
                    return  <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                    <div className="row g-3">
  
                              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    
                                    <div class="card mb-3">
                                        <div class="row g-0">
                                           
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
                            
                    </div>
    
                    </div>
            </div>
                  }
                )}
                </div>
        </div>

    </div>


    </div>
  )
}

export default ViewMyPost