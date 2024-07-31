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