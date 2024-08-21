import React , {useState} from 'react'
import DataTable from '../components/DataTable'
import AddUsers from '../components/AddUsers'
import { addProduct } from '../data'



const columns=[
  {field:"id", headerName:"ID", width:90},
  {
    field:"img",
    headerName:"Image",
    width:100,
    renderCell:(params)=>{
      return <img src={params.row.img} alt=""/>
    },
    },
    {
      field:"title",
      type:"string",
      headerName:"Title",
      width:250,
    },
    {
      field:"range",
      type:"string",
      headerName:"Range ",
      width:250,
    },
    {
      field:"price",
      type:"string",
      headerName:"Price",
      width:250,
    },
    {
      field:"producer",
      type:"string",
      headerName:"Producer",
      width:250,
    },
    {
      field:"createdAt",
      type:"string",
      headerName:"Created At",
      width:250,
    },
    {
      field:"inStock",
      // type:"string",
      headerName:"In Stock",
      width:250,
      type:"boolean"
    },

]





const Products = () => {
  const [open, setOpen]=useState(false)
  return (
<div className="users ">
  <div className="info items-center gap-[20px] mb-[20px] cursor-pointer">
  <div className="info1 flex gap-[10px] ">
    <h1 className="font-bold text-3xl ">Products</h1>
    <button onClick={()=> setOpen(true)} className="p-2 bg-slate-400 rounded-lg mb-3 hover:bg-slate-500">Add New Product</button>
    </div>
    <DataTable columns={columns} myrows={addProduct} linkToUsers="products" />
      {open && <AddUsers columns={columns} setOpen={setOpen} criteria="product" />}
    </div>
</div>  )
}

export default Products