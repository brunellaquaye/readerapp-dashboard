import React from 'react'
import DataTable from '../components/DataTable'
import { myrows } from '../data';
import noAvatar from '../assets/noavatar.png'
import { useState } from 'react';
import AddUsers from '../components/AddUsers';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {field: 'avatar', headerName: 'Avatar', width:90, 
  renderCell:(params)=> {
     return (
     <img 
     src={params.row.img || noAvatar } 
     alt ="avatar" 
      style={{width: 50, height: 50, borderRadius: "50%", backgroundColor: "lightgray", objectFit: "cover"}}
     />
  )}
},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: 'email',
    type:"string",
    headerName: 'Email',
    width: 150,
  },
  {
    field:"createdAt",
    headerName:"Created At",
    width: 150,
  },
  {
    field:"phone",
    headerName:"Phone",
    width: 200,
    type:"string",
  },
  {
    field:"verified",
    headerName:"Verified",
    width: 100,
    type:"boolean",
  },
  
];

const Users = () => {
  const [open, setOpen]=useState(false)
  return (
<div className="users ">
  <div className="info items-center gap-[20px] mb-[20px] cursor-pointer">
  <div className="info1 flex gap-[10px] ">
    <h1 className="font-bold text-3xl ">Users</h1>
    <button onClick={()=> setOpen(true)} className="p-2 bg-slate-400 rounded-lg mb-3 hover:bg-slate-500">Add New User</button>
    </div>
    <DataTable columns={columns} myrows={myrows} linkToUsers="users" />
      {open && <AddUsers columns={columns} setOpen={setOpen} criteria="user" />}
    </div>
</div>  )
}

export default Users