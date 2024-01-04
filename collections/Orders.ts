import { Access, CollectionConfig } from "payload/types";

const yourOwn:Access = ({req: {user}}) => {
    if(user.role === "Admin") return true

    return{
        user:{
            equals:user?.id
        }
    }
}

export const Orders: CollectionConfig = {
    slug: "orders",
    admin:{
        useAsTitle:"Your Orders",
        description:"A summary of all your orders on Digitalhippo.",
    },
    access:{
        read:yourOwn,
        update:({req}) => req.user.role === "Admin",
        delete:({req}) => req.user.role === "Admin",
        create:({req}) => req.user.role === "Admin",
    },
    fields:[
        {
            name:"_isPaid",
            type: "checkbox",
            access:{
                read:({req}) =>req.user.role === 'Admin',
                create: () => false,
                update: () => false,
            },
            admin:{
                hidden:true,
            },
            required:true,
        },
        {
            name:"user",
            type:"relationship",
            admin:{
                hidden:true,
            },
            relationTo:"users",
            required:true,
        },
        {
            name:"products",
            type:"relationship",
            relationTo:"products",
            required:true,
            hasMany:true,
        }, 
    ]
}