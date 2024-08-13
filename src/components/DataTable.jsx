import React, { useState } from 'react';
import "../styles/dataTable.css";
import noAvatar from "../assets/noavatar.png";
import { Link } from "react-router-dom";
import view from "../assets/view.svg";
import deleteIcon from "../assets/delete.svg";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


const DataTable = ({ columns, myrows, linkToUsers }) => {
  const [rows, setRows] = useState(myrows);

  const handleDelete = (id) => {
    console.log("deleted", id);
    setRows(rows.filter((row) => row.id !== id));
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      console.log("renderCell called for row id:", params.row.id); // Log when renderCell is called
      return (
        <div className="action flex gap-[15px] ">
          <Link to={`/${linkToUsers}/${params.row.id}`}>
            <img src={view} alt="view"  className="w-[20px] h-[20px] cursor-pointer" />
          </Link>
          <div className="delete " onClick={() => {
            console.log("Delete button clicked for row id:", params.row.id); // Log when delete button is clicked
            handleDelete(params.row.id);
          }}>
            <img src={deleteIcon} alt="delete"  className="w-[20px] h-[20px] cursor-pointer"/>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="dataTable">
      
        <DataGrid
          className="bg-white p-[20px]"
          rows={rows}
          columns={[...columns, actionColumn]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 15,
              },
            },
          }}
          slots={{ toolbar: GridToolbar }}
        />
    </div>
  );
};

export default DataTable;