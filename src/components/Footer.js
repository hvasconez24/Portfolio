import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/hilary.vasconez.3">
                <span style={{ marginLeft: "10px" }}>
                    <FacebookIcon/>
                  Facebook
                </span>
            </FooterLink>
            <FooterLink href="https://github.com/hvasconez24">
                <span style={{ marginLeft: "10px" }}>
                    <GitHubIcon/>
                  GitHub
                </span>
            </FooterLink>
            <FooterLink href="https://www.linkedin.com/in/hilary-vasconez-422007134/">
                <span style={{ marginLeft: "10px" }}>
                    <LinkedInIcon/>
                  LinkedIn
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;