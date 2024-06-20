import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../stores/index.store";
import { Field, Form, Formik } from "formik";
import { MenuItem, Select } from "@mui/material";
import { ICreateANewAccount } from "@interfaces/account";
import { createANewAccount } from "../../../../stores/account.store";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  borderRadius: 4,
  p: 4,
  "@media only screen and (max-width: 600px)": {
    width: "90%",
  },
};

export default function AccountModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues: ICreateANewAccount = {
    username: "",
    password: "",
    role: "",
  };

  const handleSubmit = (values: ICreateANewAccount) => {
    console.log(values);
    dispatch(createANewAccount({ ...values } as ICreateANewAccount))
      .unwrap()
      .then(() => handleClose())
      .then(() => window.location.reload());
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a new Account
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                mt: 2,
                gap: "1rem",
              }}
            >
              <Field
                as={TextField}
                label="Username"
                variant="outlined"
                name="username"
                id="name"
                size="small"
              />

              <Field
                as={TextField}
                label="Password"
                variant="outlined"
                name="password"
                id="password"
                size="small"
              />
              <Field
                as={Select}
                label="Role"
                variant="outlined"
                name="role"
                id="role"
                size="small"
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"CM"}>Content moderators</MenuItem>
                <MenuItem value={"FRS"}>Food Review Staff</MenuItem>
                <MenuItem value={"Customer"}>Customer</MenuItem>
              </Field>

              <Button
                variant="contained"
                size="medium"
                color="primary"
                type="submit"
                fullWidth
              >
                Submit
              </Button>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
}
