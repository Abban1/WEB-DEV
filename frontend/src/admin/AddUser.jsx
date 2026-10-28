import React from "react";
import axios from "axios";

function AddUser() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("onSubmit is working!");

    const data = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    };

    const response = await axios.post(
      "http://localhost:5000/admin",
      data
    );

    console.log("Backend received:", response.data);
  };

  return (
    <div className="container mt-4">
      <div className="col-md-6">
        <h2>Add User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Add User
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddUser;