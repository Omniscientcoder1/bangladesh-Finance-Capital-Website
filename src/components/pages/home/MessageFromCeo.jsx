// import React from "react";
// import { Box, Typography, Container, Avatar } from "@mui/material";
// import data from "@/data/messageFromCeoData";

// const MessageFromCeo = () => {
//   return (
//     <Box component="section" sx={{ py: 8, backgroundColor: "#f4f6f8" }}>
//       <Container maxWidth="sm">
//         {/* CEO Image Centered */}
//         <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
//           <Avatar
//             src={data.image}
//             alt={data.name}
//             sx={{ width: 180, height: 180, boxShadow: 3 }}
//           />
//         </Box>

//         {/* CEO Name + Role */}
//         <Box textAlign="center" sx={{ mb: 3 }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", color: "#003366" }}>
//             {data.name}
//           </Typography>
//           <Typography variant="body2" sx={{ color: "#666" }}>
//             {data.role}
//           </Typography>
//         </Box>

//         {/* Message below */}
//         <Box>
//           <Typography
//             variant="h5"
//             component="h2"
//             align="center"
//             gutterBottom
//             sx={{ color: "#003366" }}
//           >
//             {data.title}
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               color: "#444",
//               textAlign: "justify",
//               lineHeight: 1.75,
//               fontSize: "1.05rem",
//               whiteSpace: "pre-line",
//             }}
//           >
//             {data.message}
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default MessageFromCeo;

import React from "react";
import { Box, Typography, Container } from "@mui/material";
import data from "@/data/messageFromCeoData";

const MessageFromCeo = () => {
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "#f4f6f8" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left Side: Text Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: "#003366", fontWeight: "bold" }}
            >
              {data.title}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#003366", mb: 0.5 }}>
              {data.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
              {data.role}
            </Typography>

            

            <Typography
              variant="body1"
              sx={{
                color: "#444",
                textAlign: "justify",
                lineHeight: 1.75,
                fontSize: "1.05rem",
                whiteSpace: "pre-line",
              }}
            >
              {data.message}
            </Typography>
          </Box>

          {/* Right Side: Rounded Rectangle Image */}
          <Box
            component="img"
            src={data.image}
            alt={data.name}
            sx={{
              width: 300,
              height: 380,
              borderRadius: 4, // Rounded rectangle
              objectFit: "cover",
              boxShadow: 3,
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MessageFromCeo;
