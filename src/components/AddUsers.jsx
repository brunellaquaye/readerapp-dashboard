import React from 'react';

const AddUsers = ({ columns, setOpen, criteria }) => {
    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("Form has been submitted");


        //You can add new users from dataBase.
      };
  return (
    <div className="add w-[100vw] h-[100vh] absolute bg-black bg-opacity-75 flex top-0 left-0 items-center justify-center rounded-md">
      <div className="modal p-[50px] bg-textSoft relative rounded-xl">
        <span className="close absolute cursor-pointer right-[10px] top-[10px] text-orange-600 p-3" onClick={() => setOpen(false)}>X</span>
        <h1 className="mb-[40px] text-2xl text-textDark">Add new {criteria}</h1>
        <form className="flex flex-wrap max-w-[500px] justify-between"
        onSubmit={handleSubmit}>
          {columns.map(column => (
            column.field !== "id" && column.field !== "img" && column.field !== "avatar" && column.field !== "fullName" && (
              <div className="item flex flex-col gap-[10px] mb-5" key={column.field}>
                <label className="text-[14px] text-textDark">{column.headerName}</label>
                <input className="p-[10px] bg-transparent text-textDark outline-none border-solid border-[0.4px] border-orange-600 rounded-md"
                type={column.type} name={column.field} 
                // placeholder={`${column.feild}`} 

                />
              </div>
            )
          ))}
          <button className="w-[100%] p-3 cursor-pointer rounded-md bg-orange-600 text-white">Send</button>

        </form>

      </div>
    </div>
  );
};

export default AddUsers;