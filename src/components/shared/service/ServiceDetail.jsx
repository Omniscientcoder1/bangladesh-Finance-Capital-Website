// import React from "react";
// import { Grid, Box, Typography, Container } from "@mui/material";

// const ServiceDetail = ({ title, description, image }) => {
//   return (
//     <Box sx={{ py: 8 }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={6} alignItems="center">
//           {/* Left: Text content (50% at sm and up) */}
//           <Grid item xs={12} sm={6}>
//             <Box sx={{ pr: { sm: 4 } }}>
//               <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3, color: "#4b4b69" }}>
//                 {title}
//               </Typography>
//               {description.map((para, idx) => (
//                 <Typography
//                   key={idx}
//                   variant="body1"
//                   align="justify"
//                   sx={{ mb: 2, lineHeight: 1.8, color: "#555" }}
//                 >
//                   {para}
//                 </Typography>
//               ))}
//             </Box>
//           </Grid>

//           {/* Right: Image content (50% at sm and up) */}
//           <Grid item xs={12} sm={6}>
//             <Box
//               component="img"
//               src={image}
//               alt={title}
//               sx={{
//                 width: "100%",
//                 height: { xs: "auto", sm: 360 },
//                 borderRadius: 2,
//                 objectFit: "cover",
//                 boxShadow: 3
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ServiceDetail;

import React from "react";
import styles from "@/styles/components/ServiceDetail.module.css";

const ServiceDetail = ({ title, description, image }) => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.title}>{title}</h2>
        {description.map((para, idx) => (
          <p key={idx} className={styles.paragraph}>
            {para}
          </p>
        ))}
      </div>
      <div className={styles.right}>
        <img src={image} alt={title} className={styles.image} />
      </div>
    </section>
  );
};

export default ServiceDetail;
