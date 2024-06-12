import { Box, Button, TextField, Typography } from "@mui/material";
import login from "../../assets/test.jpg";
const Login = () => {
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${login})`,
            backgroundSize: "cover",
          }}
        />
        <Box sx={{ width: "50%", height: "100%" }}>
          <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            gap={2}
          >
            <Typography variant="h4">Welcome to HANOIANGI</Typography>

            <Typography variant="h6">Login to contiune</Typography>

            <TextField
              id="username"
              label="Username"
              variant="outlined"
              sx={{ width: "75%" }}
              autoComplete="on"
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              sx={{ width: "75%" }}
              autoComplete="on"
            />

            <Button variant="contained" sx={{ width: "75%" }}>
              Login
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
