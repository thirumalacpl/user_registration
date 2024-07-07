import React from "react";

const Home = () => {

  const handleSubmit = () => {
    console.log("handle submit")
  }


  return <div>
    <div class="container">
      <h1>First Page</h1>
      <div class="row">
        <div class="col">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="email" class="form-control" id="name" placeholder="name"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Mobile</label>
            <input type="email" class="form-control" id="name" placeholder="Mobile"></input>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Country</label>
            <input type="email" class="form-control" id="name" placeholder="Mobile"></input>
          </div>
          <button type="button" class="btn btn-primary center" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
