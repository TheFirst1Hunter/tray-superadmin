import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useRecoilState } from "recoil";
import { AdminModalState } from "@atoms";
import AdminDataFrom from "../forms/Admin-form";

function UserUpdateModal() {
  const [adminModalVisibility, setAdminModalVisibility] =
    useRecoilState<boolean>(AdminModalState);
  const [useId, setUserId] = useState<string>("");
  return (
    <div>
      <Modal
        open={adminModalVisibility}
        onClose={() => setAdminModalVisibility(false)}
      >
        <AdminDataFrom />
      </Modal>
    </div>
  );
}

export default UserUpdateModal;
