import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  TextField,
  Button,
  Stack,
  Divider,
} from "@mui/material";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/images/logo_cropped.png";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#003366", color: "#fff", pt: 8, pb: 4, px: 2 }}>
      <Grid container spacing={4} justifyContent="space-between" maxWidth="lg" mx="auto">
        {/* Useful Links */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>Useful Links</Typography>
          <Stack spacing={1}>
            <Link href="/citizencharter" style={{ color: "#fff", textDecoration: "none" }}>Citizen Charter</Link>
            <Link href="/financial-literacy" style={{ color: "#fff", textDecoration: "none" }}>Financial Literacy</Link>
            <Link href="/informationrights" style={{ color: "#fff", textDecoration: "none" }}>Information Rights</Link>
            <Link href="/complaintcell" style={{ color: "#fff", textDecoration: "none" }}>Complaint Cell</Link>
            <Link href="/privacypolicy" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/NIS" style={{ color: "#fff", textDecoration: "none" }}>NIS</Link>
          </Stack>
        </Grid>

        {/* Support */}
        <Grid item xs={6} md={2}>
          <Typography variant="h6" gutterBottom>Support</Typography>
          <Stack spacing={1}>
            <Link href="mailto:info@bd.finance" style={{ color: "#fff", textDecoration: "none" }}>info@bd.finance</Link>
            <Link href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
            <Link href="/branch-contacts" style={{ color: "#fff", textDecoration: "none" }}>Branch Contact</Link>
            <Link href="/faqs" style={{ color: "#fff", textDecoration: "none" }}>FAQ</Link>
          </Stack>
        </Grid>

        {/* Subscribe */}
        <Grid item xs={12} md={3}>
          <Typography variant="h6" gutterBottom>Subscribe</Typography>
          <Stack spacing={1}>
            <Stack direction="row" spacing={1}>
              <TextField
                size="small"
                placeholder="Enter your email"
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 1,
                  "& input": { color: "#000" },
                }}
              />
              <Button variant="contained" color="primary">
                Subscribe
              </Button>
            </Stack>
            <Typography variant="caption" sx={{ color: "#fff" }}>
              Get the latest updates via email.
            </Typography>
          </Stack>
        </Grid>
      </Grid>

      {/* Divider & Bottom */}
      <Divider sx={{ my: 4, borderColor: "#ffffff33" }} />

      <Grid container justifyContent="space-between" maxWidth="lg" mx="auto">
        <Grid item xs={12} md={6}>
          <Typography variant="body2">
            © {new Date().getFullYear()} <Link href="/" style={{ color: "#fff" }}>Bangladesh Finance PLC</Link> | Information Technology Division
          </Typography>
        </Grid>
        <Grid item xs={12} md="auto">
          <Stack direction="row" spacing={2}>
            <Link href="/privacy-policy" style={{ color: "#fff", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms-conditions" style={{ color: "#fff", textDecoration: "none" }}>Terms & Conditions</Link>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
