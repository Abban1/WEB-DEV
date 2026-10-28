import React from "react";
import axios from "axios";

function UpdateUser() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("onSubmit is working!");

    const data = {
      userId: event.target.userId.value,
      username: event.target.username.value,
      email: event.target.email.value
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
        <h2>Update User</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">User ID</label>
            <input
              type="number"
              name="userId"
              className="form-control"
              placeholder="Enter user ID"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter new username"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter new email"
            />
          </div>

          <button type="submit" className="btn btn-warning w-100">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;