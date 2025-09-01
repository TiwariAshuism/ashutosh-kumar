"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import data from '@/data/data.json';

const FooterContainer = styled(Box)({
  backgroundColor: "#222222",
  color: "white",
  padding: "60px 0 40px",
  width: "100%",
  borderTopLeftRadius: "15px",
  borderTopRightRadius: "15px",
});

const FooterSection = styled(Box)(({ theme }) => ({
  marginBottom: "30px",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
    marginBottom: "40px",
  },
}));

const FooterHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontWeight: "bold",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "center",
  },
}));

const FooterText = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "0.9rem",
  color: "white",
});

const FooterLink = styled(MuiLink)({
  color: "white",
  textDecoration: "none",
  marginRight: "10px",
  fontFamily: "var(--font-urbanist)",
  "&:hover": {
    textDecoration: "underline",
  },
});

const FooterGreeting = styled(Typography)(({ theme }) => ({
  fontFamily: "var(--font-urbanist)",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    textAlign: "center",
    marginBottom: "40px",
  },
}));

const CopyrightText = styled(Typography)({
  fontFamily: "var(--font-urbanist)",
  fontSize: "0.9rem",
  color: "#4DB4D7",
});

export default function Footer() {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const { footer } = data.layout;

  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{ padding: { xs: "0 20px", md: "0 24px" } }}>
        <FooterGreeting variant="h6">
          {footer.greeting}
        </FooterGreeting>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: { xs: "center", md: "space-between" },
            alignItems: { xs: "center", md: "flex-start" },
            borderRadius: "20px 20px 0 0",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "10px", md: "0" },
          }}
        >
          <FooterSection>
            <FooterHeading>{footer.contact.title}</FooterHeading>
            <FooterText>
              <MuiLink
                href={`mailto:${footer.contact.email}`}
                color="inherit"
                underline="none"
                sx={{ "&:hover": { textDecoration: "underline" } }}
              >
                {footer.contact.email}
              </MuiLink>
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterHeading>{footer.connect.title}</FooterHeading>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: "10px", sm: "0" },
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {footer.connect.links.map((link, index) => (
                <React.Fragment key={link.label}>
                  <FooterLink
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </FooterLink>
                  {!isMobile && index < footer.connect.links.length - 1 && "     "}
                </React.Fragment>
              ))}
            </Box>
          </FooterSection>

          <FooterSection sx={{ textAlign: { xs: "center", md: "right" } }}>
            <CopyrightText>{footer.copyright.text}</CopyrightText>
            <FooterText>{footer.copyright.subtext}</FooterText>
          </FooterSection>
        </Box>
      </Container>
    </FooterContainer>
  );
}
