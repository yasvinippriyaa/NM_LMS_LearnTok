import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CourseTable() {
	const [cruds, setCruds] = useState([]);

	useEffect(() => {
		const fetchCruds = async () => {
			try {
				const response = await axios.get("http://localhost:8080/api/courses");
				console.log("Fetched data:", response.data);  // Add this line for debugging
				setCruds(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};


		fetchCruds();
	}, [window.location.pathname]); // Re-fetch when path changes

	const handleDelete = async (id) => {
		const confirmDelete = window.confirm('Are you sure you want to delete this course?');
		if (confirmDelete) {
			try {
				await axios.delete(`http://localhost:8080/api/courses/${id}`);
				setCruds(cruds.filter(crud => crud._id !== id));
				alert('Course deleted successfully');
			} catch (error) {
				console.error('Error deleting course:', error);
				alert('Failed to delete course');
			}
		}
	};

	return (
		<div className="container">
			<div>
				<h2>LearTok Courses</h2>
				<hr />
			</div>

			<div className="table-responsive">
				<table className="table table-striped table-hover table-bordered">
					<thead>
						<tr>
							<th>Title</th>
							<th>Category</th>
							<th>Educator</th>
							<th>Price</th>
							{/* <th>Sections</th> */}
							<th>Enrolled</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{cruds && cruds.length > 0 ? (
							cruds.map((crud) => (
								<tr key={crud._id}>
									<td>{crud["C_title"]}</td>
									<td>{crud["C_categories"]}</td>
									<td>{crud["C_educator"]}</td>
									<td>{crud["C_price"]}</td>
									{/* <td>{crud.sections}</td> */}
									<td>{crud.enrolled}</td>
									<td>
										<button onClick={() => handleDelete(crud._id)} className="btn btn-danger">
											Delete
										</button>
									</td>

								</tr>
							))
						) : (
							<tr>
								<td colSpan="7" className="text-center">
									No courses available
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default CourseTable;
