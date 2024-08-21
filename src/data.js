import { GiChoice } from "react-icons/gi"
import {  MdSecurity } from "react-icons/md"
import { IoNotificationsOutline } from "react-icons/io5"
import { RiQuestionLine } from "react-icons/ri" 
import { AiOutlinePhone } from "react-icons/ai"
 import homeIcon from "./assets/home.svg"
 import profileIcon from "./assets/profile.svg"
 import userIcon from "./assets/user.svg"
 import productIcon from "./assets/product.svg"
 import orderIcon from "./assets/order.svg"
 import postIcon from "./assets/post.svg"
 import elementIcon from "./assets/element.svg"
 import noteIcon from "./assets/note.svg"
 import formIcon from "./assets/form.svg"
 import calenderIcon from "./assets/calendar.svg"
 import settingIcon from "./assets/setting.svg"
 import backupIcon from "./assets/backup.svg"
 import logIcon from "./assets/log.svg"
 import chartIcon from "./assets/chart.svg"
 import conversionIcon from "./assets/conversionIcon.svg"
 import user from "./assets/userIcon.svg"
 import product from "./assets/productIcon.svg"
 import revenue from "./assets/revenueIcon.svg"
 


// Future upgrades: Use APIs for this or you will have to fetch the data from the database

 
 export const menu = [
    {
        id:1,
        title:"main",
        listItems:[
            {
                id:1,
                title:"Homepage",
                icon:homeIcon,
                url:"/"
            },
            {
                id:2,
                title:"Profile",
                icon:profileIcon,
                url:"/users"
            },
        ],
    },
    {
        id:2,
        title:"lists",
        listItems:[
            {
                id:1,
                title:"Users",
                icon:userIcon,
                url:"/users"
            },
            {
                id:2,
                title:"Products",
                icon:productIcon,
                url:"/products"
            },
            {
                id:3,
                title:"Orders",
                icon:orderIcon,
                url:"/orders"
            },
        ],
    },

    {
        id:3,
        title:"general",
        listItems:[
            {
                id:1,
                title:"Elements",
                icon:elementIcon,
                url:"/"
            },
            {
                id:2,
                title:"Notes",
                icon:noteIcon,
                url:"/"
            },
            {
                id:3,
                title:"Forms",
                icon:formIcon,
                url:"/"
            },
            {
                id:4,
                title:"Calender",
                icon:calenderIcon,
                url:"/"
            },
        ],
    },

    {
        id:4,
        title:"Maintenance",
        listItems:[
            {
                id:1,
                title:"Settings",
                icon:settingIcon,
                url:"/settings",
                submenu: true,
                onClick: true,
                subItems: [
                    {
                        id: 1,
                        title: "Preference",
                        url: "/settings",
                        icon: GiChoice 
                    },
                    {
                        id: 2,
                        title: "Security",
                        url: "/settings/security",
                       icon:  MdSecurity 
                    },
                    {
                        id: 3,
                        title: "Notification",
                        url: "/settings/notifications",
                        icon: IoNotificationsOutline 
                    },
                ]
                    
           
              },
              {
                id:2,
                title:"Support",
                icon:logIcon,
                url:"/contact",
                submenu: true,
                onClick: true,
                subItems: [
                    {
                        id: 1,
                        title: "Contact",
                        url: "/contact",
                        icon: AiOutlinePhone 
                    },
                    {
                        id: 2,
                        title: "FAQ",
                        url: "/faq",
                       icon:  RiQuestionLine 
                    },
                    // {
                    //     id: 3,
                    //     title: "Support",
                    //     url: "/supportscreen",
                    //     icon: IoNotificationsOutline 
                    // },
                ]
                    
           
              },
           
        ],
    },
   
    
    
 ];

 export const topDeals=[
    {
        id:1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLKFC0wo4itixSIlD-UagzzT7z62ZvOS2-A&s" ,
        email: "leyla@gmail.com",
        userName:"Carmen",
        amount:"3.499"
    },
    {
        id:2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqW_F3f2e6etl0m648H-ZbPMHuL1LwBfyfBA&s" ,
        email: "leyla@gmail.com",
        userName:"April",
        amount:"3.499"
    },
    {
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTzRLzyQt0JInVAhe3ILZf97mgHSqjnMpGA&s",
        email: "john@gmail.com",
        userName:"Angela",
        amount:"4.299"
    },
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8f8qJcHCxhD9LpsWRhzsIvIpr2O7HG-jKtA&s",
        email: "sarah@gmail.com",
        userName:"Jayden",
        amount:"2.199"
    },
    {
        id:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ImXCKz5Cxq_lj05wOJ9Uo1g7WyJHBSqYCQ&s",
        email: "michael@gmail.com",
        userName:"Brooks",
        amount:"5.699"
    },
    {
        id:6,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mcqf-1g06VfMleAeIrzIEsWTmKn7QoSwJQ&s",
        email: "michael@gmail.com",
        userName:"Augustine",
        amount:"5.699"
    },
    {
        id:7,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6J83eYYuFuwAJsoPcczoEm6H5U3xImEwmIg&s",
        email: "michael@gmail.com",
        userName:"Parker",
        amount:"5.699"
    },
    {
        id:8,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6J83eYYuFuwAJsoPcczoEm6H5U3xImEwmIg&s",
        email: "michael@gmail.com",
        userName:"Parker",
        amount:"5.699"
    },
    {
        id:9,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6J83eYYuFuwAJsoPcczoEm6H5U3xImEwmIg&s",
        email: "michael@gmail.com",
        userName:"Parker",
        amount:"5.699"
    },
 ];

 export const chartBoxUser={
    color:"#8884d8",
    icon:user,
    title:"Total Users",
    number:"11.238",
    dataKey:"users",
    percentage:45,
    chartData:[
        {name:"Mon", users:400},
        {name:"Tue", users:500},
        {name:"Wed", users:460},
        {name:"Thurs", users:977},
        {name:"Fri", users:576},
        {name:"Sat", users:235},
        {name:"Sun", users:856},
    ]
 };

 export const chartBoxRevenue = {
    color: "#82ca9d",
    icon: revenue, 
    title: "Revenue",
    dataKey: "revenue",
    number: "$12,345",
    percentage: 78,
    chartData: [
      { name: "Mon", revenue: 800 },
      { name: "Tue", revenue: 967 },
      { name: "Wed", revenue: 1098 },
      { name: "Thu", revenue: 1200 },
      { name: "Fri", revenue: 1228 },
      { name: "Sat", revenue: 1100 },
      { name: "Sun", revenue: 1500 },
    ],
  };

  export const chartBoxProducts = {
    color: "orange",
    icon: product, 
    title: "Products",
    dataKey: "revenue",
    number: "$12,345",
    percentage: -23,
    chartData: [
      { name: "Mon", revenue: 800 },
      { name: "Tue", revenue: 967 },
      { name: "Wed", revenue: 198 },
      { name: "Thu", revenue: 1660 },
      { name: "Fri", revenue: 1228 },
      { name: "Sat", revenue: 11 },
      { name: "Sun", revenue: 1500 },
    ],
  };

  export const chartBoxConversion = {
    color: "lightblue",
    icon: conversionIcon, 
    title: "Conversion",
    dataKey: "revenue",
    number: "$12,345",
    percentage: 3,
    chartData: [
      { name: "Mon", revenue: 80 },
      { name: "Tue", revenue: 67 },
      { name: "Wed", revenue: 1048 },
      { name: "Thu", revenue: 1200 },
      { name: "Fri", revenue: 14628 },
      { name: "Sat", revenue: 1100 },
      { name: "Sun", revenue: 1530 },
    ],
  };


  export const barChartBoxVisit={
    title:"Total Visit",
    color: "#FF8042",
    dataKey:"visit",
    chartData:[
        {
            name:"Sun",
            visit:2009,
        }, 
        {
            name:"Mon",
            visit:2009,
        },      
        {
            name:"Tue",
            visit:209,
        },  
        {
            name:"Wed",
            visit:2679,
        },  
        {
            name:"Thur",
            visit:3309,
        },  
        {
            name:"Fri",
            visit:7409,
        },  
        {
            name:"Sat",
            visit:709,
        },  
    ]
};


export const barChartBoxRevenue={
    title:"Total Revenue",
    color: "#FF8042",
    dataKey:"visit",
    chartData:[
        {
            name:"Sun",
            visit:689,
        }, 
        {
            name:"Mon",
            visit:2009,
        },      
        {
            name:"Tue",
            visit:29,
        },  
        {
            name:"Wed",
            visit:2879,
        },  
        {
            name:"Thur",
            visit:339,
        },  
        {
            name:"Fri",
            visit:709,
        },  
        {
            name:"Sat",
            visit:709,
        },  
    ]
}


export const myrows=[
    {
        id:1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLKFC0wo4itixSIlD-UagzzT7z62ZvOS2-A&s" ,
        lastName:"Cruella",
        firstName:"Mondo",
        email:"cruella@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqW_F3f2e6etl0m648H-ZbPMHuL1LwBfyfBA&s" ,
        lastName:"Carmen",
        firstName:"Brooks",
        email:"carmen@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: false,
    },
    {
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTzRLzyQt0JInVAhe3ILZf97mgHSqjnMpGA&s",
        lastName:"April",
        firstName:"Sins",
        email:"april@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8f8qJcHCxhD9LpsWRhzsIvIpr2O7HG-jKtA&s",
        lastName:"Angela",
        firstName:"Vitz",
        email:"angela@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ImXCKz5Cxq_lj05wOJ9Uo1g7WyJHBSqYCQ&s",
        lastName:"Stephen",
        firstName:"Parker",
        email:"stephen@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:6,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5mcqf-1g06VfMleAeIrzIEsWTmKn7QoSwJQ&s",
        lastName:"Onil",
        firstName:"Mannar",
        email:"onil@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:7,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLKFC0wo4itixSIlD-UagzzT7z62ZvOS2-A&s" ,
        lastName:"Genner",
        firstName:"Pinsin",
        email:"genner@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:8,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLKFC0wo4itixSIlD-UagzzT7z62ZvOS2-A&s" ,
        lastName:"Mellisa",
        firstName:"Gladys",
        email:"mellisa@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: false,
    },
    {
        id:9,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6J83eYYuFuwAJsoPcczoEm6H5U3xImEwmIg&s",
        lastName:"Nuella",
        firstName:"Mundane",
        email:"nuella@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: true,
    },
    {
        id:10,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6J83eYYuFuwAJsoPcczoEm6H5U3xImEwmIg&s",
        lastName:"Felicia",
        firstName:"Pores",
        email:"felicia@gmail.com",
        phone:"+223 345 323 3423",
        createdAt:"09.03.2024",
        verified: false,
    }
]


export const addProduct = [
    {
      id: 1,
      img: "https://example.com/images/product1.jpg",
      title: "Product 1",
      range: "10-20",
      producer: "Producer 1",
      price: 19.99,
      createdAt: "2023-01-01"
    },
    {
      id: 2,
      img: "https://example.com/images/product2.jpg",
      title: "Product 2",
      range: "20-30",
      producer: "Producer 2",
      price: 29.99,
      createdAt: "2023-02-01"
    },
    {
      id: 3,
      img: "https://example.com/images/product3.jpg",
      title: "Product 3",
      range: "30-40",
      producer: "Producer 3",
      price: 39.99,
      createdAt: "2023-03-01"
    },
    {
      id: 4,
      img: "https://example.com/images/product4.jpg",
      title: "Product 4",
      range: "40-50",
      producer: "Producer 4",
      price: 49.99,
      createdAt: "2023-04-01"
    },
    {
      id: 5,
      img: "https://example.com/images/product5.jpg",
      title: "Product 5",
      range: "50-60",
      producer: "Producer 5",
      price: 59.99,
      createdAt: "2023-05-01"
    }
  ];