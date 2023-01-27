import Board from "@components/icons/Boars"
import People from "@components/icons/People"
import Compass from "@components/icons/Compass"
import Curr from "@components/icons/Book"
import Task from "@components/icons/Task"
import Recordings from "@components/icons/Recordings"

export const dashRoutes = {
    ADMIN:[
        {
        id:0,
        title:"Dashboard",
        route:"/dashboard",
        icon:Board,     
    }, 
    {
        id:1,
        title:"Assign  Role",
        route:"/dashboard/role",     
        icon:Compass,
    },
    {
        id:2,
        title:"Group Students",
        route:"/dashboard/group-student",
        icon:People,
      
    },
  
    {
        id:4,
        title:"Curriculum",
        link:"/dashboard/curriculum",
        route:[ {
            id:0,
            title:"Module",
            route:"/dashboard/curriculum/module",
            icon:Curr,   
            },
            {
            id:1,
            title:"Topics",
            route:"/dashboard/curriculum/topics",
            icon:Curr,   
            }],
        icon:Curr,       
    },    
   
],
    MENTOR:[
        {
        id:0,
        title:"Dashboard",
        route:"/dashboard",
        icon:Board,     
    }, 
        {
            id:1,
            title:"Resources",
            route:"/dashboard/resources",
            icon:Curr
        },
          {
        id:2,
        title:"Tasks",
        route:"/dashboard/task",
        icon:Task,      
       },
       {
        id:3,
        title:"Recordings",
        route:"/dashboard/recordings",
        icon:Recordings,          
    },
    ],
    STUDENT:[
        {
            id:0,
            title:"Dashboard",
            route:"/dashboard",
            icon:Board,     
        }, 
        {
            id:1,
            title:"Resources",
            route:"/dashboard/resources",
            icon:Curr
        },
        {
            id:2,
            title:"Tasks",
            route:"/dashboard/task",
            icon:Task,          
        },   
        {
            id:2,
            title:"Recordings",
            route:"/dashboard/recordings",
            icon:Recordings,          
        },
    ]
}

