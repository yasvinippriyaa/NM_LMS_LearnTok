import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserTable() {
	const [cruds, setCruds] = useState([]);

	useEffect(() => {
		const fetchCruds = async () => {
			try {
				const response = await axios.get("http://localhost:8080/api/users");
				setCruds(response.data);
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};
		fetchCruds();
	}, [window.location.pathname]);

	const handleDelete = async (id) => {
		const confirmDelete = window.confirm("Are you sure you want to delete this user?");
		if (confirmDelete) {
			try {
				await axios.delete(`http://localhost:8080/api/users/${id}`);
				setCruds(cruds.filter((crud) => crud._id !== id)); // Update state to remove deleted user
				alert("User deleted successfully");
			} catch (error) {
				console.error("Error deleting user:", error);
				alert("Failed to delete user");
			}
		}
	};

	return (
		<div className="container">
			<div>
				<h2>LearnTok Users</h2>
				<hr />
			</div>

			<div className="table-responsive">
				<table className="table table-striped table-hover table-bordered container">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Type</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{cruds && cruds.length > 0 ? (
							cruds.map((crud) => (
								<tr key={crud._id}>
									<td>{crud.name}</td>
									<td>{crud.email}</td>
									<td>{crud.type}</td>
									<td>
										<button
											onClick={() => handleDelete(crud._id)}
											className="btn btn-danger"
										>
											Delete
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="4" className="text-center">
									No users available
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default UserTable;
