import { Box, Button, TextField, Typography } from "@mui/material";
import loginImage from "../../assets/login.jpg";
import { Field, Form, Formik } from "formik";
import { ILoginPayload } from "../../interfaces/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/index";
import { login } from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../utils/notification";
const Login = () => {
  const initialValues: ILoginPayload = {
    username: "",
    password: "",
  };

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSubmit = (values: ILoginPayload) => {
    console.log(values);
    try {
      dispatch(login(values)).then(() => {
        navigate("/admin/dashboard");
        notifySuccess("Login successfully");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Box sx={{ width: "100%", height: "100vh", display: "flex" }}>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            backgroundImage: `url(${loginImage})`,
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

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "90%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Field
                  as={TextField}
                  id="username"
                  name="username"
                  label="Username"
                  variant="outlined"
                  sx={{ width: "75%" }}
                  autoComplete="on"
                />

                <Field
                  as={TextField}
                  id="password"
                  label="Password"
                  variant="outlined"
                  sx={{ width: "75%" }}
                  autoComplete="on"
                  type="password"
                  name="password"
                />

                <Button variant="contained" sx={{ width: "75%" }} type="submit">
                  Login
                </Button>
              </Form>
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
