import React from "react";
import { useNavigate } from "react-router-dom";
import { Heading, Box, Button } from "@chakra-ui/react";

const NotFound = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Box className="error-page">
            <Heading as="h1">404 | Not Found</Heading>
            <Button onClick={handleBack} data-testid="back" className="btn-error">Take me Back</Button>
        </Box>
    );
};

export default NotFound;
