import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Text} from "@chakra-ui/react";
import "../style.css";

const Home = () => {
    return (
        <Box className="home-container">
            <Box className="home-content-a">
                <Text as="h2" className="title-a" lineHeight="1.33em">
                    Studi Independen Kampus Merdeka By Ruangguru
                </Text>
            </Box>
            <Box className="home-content-b">
                <Text as="h3">Welocome to Student Portal</Text>
                <Link to="/student">
                    <Button data-testid="student-btn" className="btn-student">All Student</Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Home;
