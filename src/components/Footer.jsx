import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box
          as="footer"
          className="footer"
          backgroundColor="rgb(218, 224, 233)"
          fontFamily="Poppins, sans-serif"
          textAlign="center"
          position="fixed"
          left="0"
          bottom="0"
          width="100%"
          p={25}>
            <p className="studentName" style={{ fontWeight: "bold", fontSize: "20px" }}>
                Prissely Pravasstifany Mediana
            </p>
            <p className="studentId" style={{ fontWeight: "bold", fontSize: "20px" }}>
                FE4245028
            </p>
        </Box>
    );
};

export default Footer;

