import { React, useState, useEffect } from "react";
import MaterialTable from "material-table";
import axios from "axios";

const Usertable = () => {
  const [users, setUsers] = useState([]);
  const url = "https://reqres.in/api/";

  const getUsers = () => {
    axios.get(`${url}users`).then((response) => {
      var allUsers = response.data;
      setUsers(allUsers.data);
      console.log(allUsers);
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const data = [
    { name: "ram", email: "ram@miraclesoft.com" },
    { name: "ram", email: "ram@miraclesoft.com" },
    { name: "ram", email: "ram@miraclesoft.com" },
    { name: "mm", email: "ram@miraclesoft.com" },
  ];

  const columns = [
    { title: "Id", field: "id" },
    { title: "Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Email", field: "email" },
    { title: "Avatar", field: "avatar" },
  ];

  return (
    <div className="container d-flex justify-content-center rounded mt-5">
      {/* <div>{users}</div> */}
      <MaterialTable
        title="User Data"
        data={users}
        columns={columns}
        options={{
          search: true,
          paging: true,
          filtering: true,

          actionsColumnIndex: -1,
        }}
        actions={[
          {
            icon: "edit",
            tooltip: "Edit User",
            onClick: (event, rowData) =>
              alert("You are editing " + rowData.name),
          },
          {
            icon: "delete",
            tooltip: "Delete User",
            //   onClick: (event, rowData) => confirm('You want to delete ' + rowData.name)
          },
        ]}
      />
    </div>
  );
};

export default Usertable;
