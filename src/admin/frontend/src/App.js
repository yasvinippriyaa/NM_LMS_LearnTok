import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import UserTable from "./components/cruds/UserTable";
import Footer from "./components/common/Footer";
import CourseTable from "./components/cruds/CourseTable";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/cruds/users" element={<UserTable />} />					
					<Route exact path="/cruds/courses" element={<CourseTable />} />	
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
