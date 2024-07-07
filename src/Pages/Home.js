import React from "react";
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  
  const navigate = useNavigate();
  console.log(props && props.parentChlid)
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = () => {
    console.log("handle submit",name, mobile);
    const dataToPass = { name: name, mobile: mobile };
    navigate('/secondPage', { state: dataToPass });

  }


  return <div>
    <div class="container">
      <h1>First Page</h1>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="name" placeholder="name"  onChange={(e) => setName(e.target.value)} value={name} ></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile</label>
            <input type="email" class="form-control" id="mobile" placeholder="Mobile" onChange={(e) => setMobile(e.target.value)} value={mobile}></input>
          </div>
          <button type="button" class="btn btn-primary center" onClick={handleSubmit}>Next</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
