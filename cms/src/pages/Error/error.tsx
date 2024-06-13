/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import Error from "../../assets/404.jpg";
import { Box, Button, Typography } from "@mui/material";
const error = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Box sx={{ width: "300px", height: "300px" }}>
        <img src={Error} alt="error" width={"100%"} height={"100%"} />
      </Box>
      <Typography variant="h5">Page Not Found</Typography>
      <Button variant="contained" onClick={handleClick}>
        Back
      </Button>
    </Box>
  );
};
export default error;
