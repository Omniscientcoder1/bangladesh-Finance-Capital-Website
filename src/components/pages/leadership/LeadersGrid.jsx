import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const LeadersGrid = ({ members }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleOpen = (member) => {
    setSelected(member);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, px: 2 }}>
        {members.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.id}>
            <Card sx={{ maxWidth: 300, mx: "auto", borderRadius: 2, overflow: "hidden" }}>
              <CardActionArea onClick={() => handleOpen(member)}>
                <Box sx={{ position: "relative" }}>
                  {/* Leader image */}
                  <CardMedia
                    component="img"
                    height="360"
                    image={member.image}
                    alt={member.name}
                    sx={{
                      transition: "transform 0.3s",
                      "&:hover": { transform: "scale(1.05)" }
                    }}
                  />

                  {/* Overlay: appears on hover */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      top: 0,
                      bgcolor: "rgba(0, 0, 0, 0.6)",
                      color: "white",
                      opacity: 0,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "opacity 0.3s",
                      "&:hover": {
                        opacity: 1
                      }
                    }}
                  >
                    <Typography variant="subtitle1">{member.name}</Typography>
                    <Typography variant="body2">{member.title}</Typography>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {selected && (
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogTitle>{selected.name}</DialogTitle>
          <DialogContent sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Box sx={{ flex: "1 1 40%" }}>
              <img
                src={selected.image}
                alt={selected.name}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Box>
            <Box sx={{ flex: "1 1 55%" }}>
              <Typography variant="h6" gutterBottom>{selected.title}</Typography>
              <div
                dangerouslySetInnerHTML={{ __html: selected.description }}
                style={{ textAlign: "justify", lineHeight: 1.7 }}
              />
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default LeadersGrid;
