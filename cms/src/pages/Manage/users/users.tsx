/* eslint-disable react-hooks/rules-of-hooks */
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../stores/index.store";
import { useEffect } from "react";
import { getAccounts } from "../../../stores/account.store";
import I from "../../../components/Icons/icon";
import React from "react";
import AccountModal from "./modal/create";
const users = () => {
  const dispatch: AppDispatch = useDispatch();
  const accounts = useSelector((state: RootState) => state.accounts.accounts);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography variant="h5">List of Accounts</Typography>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
        <Button variant="contained" onClick={handleOpenModal}>
          Create New
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accounts.map((a) => (
              <TableRow
                key={a._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {a.username}
                </TableCell>
                <TableCell>{a.fullName}</TableCell>
                <TableCell>{a.email}</TableCell>
                <TableCell>{a.role}</TableCell>
                <TableCell>
                  {a.status === "active" ? (
                    <I.DotIcon color="success" />
                  ) : (
                    <I.DotIcon color="error" />
                  )}
                </TableCell>
                <TableCell>
                  <Button variant="contained" sx={{ mr: 1 }} color="info">
                    <I.EyeIcon />
                  </Button>
                  <Button variant="contained" color="error">
                    <I.DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <AccountModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
};
export default users;
