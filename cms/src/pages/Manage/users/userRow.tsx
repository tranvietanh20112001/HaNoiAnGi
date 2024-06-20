/* eslint-disable react-hooks/rules-of-hooks */
import { Button, TableCell, TableRow } from "@mui/material";
import I from "../../../components/Icons/icon";
import { IAccount } from "@interfaces/account.interface";
import DeleteAccountModal from "./modal/delete";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../stores/index.store";
import React from "react";
import { deleteAnAccount } from "../../../stores/account.store";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../../utils/notification.util";

export interface IAccountRowProps {
  Account: IAccount;
}

export default function AccountRow({ Account }: IAccountRowProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [openDeleteAccountModal, setOpenDeleteAccountModal] =
    React.useState(false);
  const handleOpenDeleteAccountModal = () => setOpenDeleteAccountModal(true);
  const handleCloseDeleteAccountModal = () => setOpenDeleteAccountModal(false);

  const handleDeleteAccount = () => {
    dispatch(deleteAnAccount({ _id: Account._id }))
      .unwrap()
      .then(() => notifySuccess("Delete successfully"))
      .then(() => handleCloseDeleteAccountModal());
  };

  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row">
          {Account.username}
        </TableCell>
        <TableCell>{Account.fullName}</TableCell>
        <TableCell>{Account.email}</TableCell>
        <TableCell>{Account.role}</TableCell>
        <TableCell>
          {Account.status === "active" ? (
            <I.DotIcon color="success" />
          ) : (
            <I.DotIcon color="error" />
          )}
        </TableCell>
        <TableCell>
          <Button
            variant="contained"
            sx={{ mr: 1 }}
            color="info"
            onClick={() => navigate(`/admin/account/${Account._id}`)}
          >
            <I.EyeIcon />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleOpenDeleteAccountModal}
          >
            <I.DeleteIcon />
          </Button>
        </TableCell>
      </TableRow>

      <DeleteAccountModal
        open={openDeleteAccountModal}
        handleClose={handleCloseDeleteAccountModal}
        onConfirmDelete={handleDeleteAccount}
      />
    </>
  );
}
