import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllCourses from './AllCourses';

const Home = () => {
  // Define styles with the updated green color
  const navbarStyle = {
    backgroundColor: '#003d28', // Apply the new green color to the navbar
    fontFamily: 'Poppins, sans-serif', // Stylish font for navbar
  };

  const homeContainerStyle = {
    backgroundColor: '#2F4F4F', // Dark slate gray for contrast
    padding: '50px',
    color: '#F1FAEE', // Soft white color for text
    fontFamily: 'Poppins, sans-serif', // Apply Poppins font
  };

  const firstContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    backgroundColor: '#F7E970', // Soft yellow for the first container
    color: '#000000', // Black text for contrast
    borderRadius: '10px', // Rounded corners for the first box
    fontFamily: 'Poppins, sans-serif', // Stylish font for first container
    border: '5px solid #FFDAB9', // Light peach border for the outer box
  };

  const contentHomeStyle = {
    fontSize: '42px',
    fontWeight: '800',
    letterSpacing: '10px',
    textAlign: 'center',
    color: '#000000', // Black text
    fontFamily: 'Poppins, sans-serif', // Stylish font for content
  };

  const secondContainerStyle = {
    marginTop: '50px',
    backgroundColor: '#003d28', // Apply the new green color to the second container
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Poppins, sans-serif', // Stylish font for second container
    border: '5px solid #FFDAB9', // Light peach border for the second container
  };

  const thirdContainerStyle = {
    marginTop: '50px',
    backgroundColor: '#2F4F4F', // Dark slate gray for the third container
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Poppins, sans-serif', // Stylish font for third container
    border: '5px solid #FFDAB9', // Light peach border for the third container
  };

  const headingStyle = {
    fontSize: '32px',
    color: '#F7E970', // Soft yellow color for headings to make them pop
    fontFamily: 'Poppins, sans-serif', // Stylish font for headings
  };

  const buttonStyle = {
    color: '#FFFFFF', // White color for text inside button
    backgroundColor: '#003d28', // Apply the new green color to the button background
    border: '2px solid #003d28', // Border color matches the background
    transition: 'all 0.3s ease',
    fontFamily: 'Poppins, sans-serif', // Stylish font for button text
  };

  const buttonHoverStyle = {
    backgroundColor: '#002e1f', // A darker shade of green for hover effect
    border: '2px solid #002e1f',
  };

  return (
    <>
      <Navbar expand="lg" style={navbarStyle}>
        <Container fluid>
          <Navbar.Brand style={{ display: 'flex', justifyContent: 'center', width: '100%', marginLeft: '190px' }}>
            <h2 style={{ color: '#FFD700', fontFamily: 'Poppins, sans-serif' }}>LearnTok</h2>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll />
            <Nav>
              <Link to={'/'} style={{ color: '#F1FAEE', marginLeft: '15px', fontFamily: 'Poppins, sans-serif' }}>Home</Link>
              <Link to={'/login'} style={{ color: '#F1FAEE', marginLeft: '15px', fontFamily: 'Poppins, sans-serif' }}>Login</Link>
              <Link to={'/register'} style={{ color: '#F1FAEE', marginLeft: '15px', fontFamily: 'Poppins, sans-serif' }}>Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div id="home-container" style={homeContainerStyle}>
        <div style={firstContainerStyle}>
          <div style={contentHomeStyle}>
            <p>"Your Future, <br />Our Focus"</p>
            <Link to={'/register'}>
              <Button
                variant="info"
                className="m-2"
                size="md"
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = '#002e1f'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#003d28'}
              >
                Explore Courses
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Container style={secondContainerStyle}>
        <h2 style={headingStyle} className="text-center my-4">Trending Courses</h2>
        <AllCourses />
      </Container>

      <Container style={thirdContainerStyle}>
        <h2 style={headingStyle} className="text-center my-4">Additional Resources</h2>
        <p style={{ color: '#F1FAEE', textAlign: 'center' }}>
          Check out more resources to enhance your learning experience.
        </p>
      </Container>
    </>
  );
};

export default Home;
