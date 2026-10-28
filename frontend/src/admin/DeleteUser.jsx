import React from "react";
import axios from "axios";

function DeleteUser() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("onSubmit is working!");

    const data = {
      userId: event.target.userId.value
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
        <h2>Delete User</h2>

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

          <button type="submit" className="btn btn-danger w-100">
            Delete User
          </button>
        </form>
      </div>
    </div>
  );
}

export default DeleteUser;