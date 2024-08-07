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
                url:"/users/1"
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
            {
                id:4,
                title:"Posts",
                icon:postIcon,
                url:"/posts"
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
                url:"/"
            },
            {
                id:2,
                title:"Backups",
                icon:backupIcon,
                url:"/"
            },
        ],
    },
    {
        id:5,
        title:"analytics",
        listItems:[
            {
                id:1,
                title:"Charts",
                icon:chartIcon,
                url:"/"
            },
            {
                id:2,
                title:"Logs",
                icon:logIcon,
                url:"/"
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
