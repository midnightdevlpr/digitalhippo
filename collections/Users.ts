import { PrimaryActionEmailHtml } from "../components/emails/PrimaryActionEmail";
import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({req:{user}}) => {
    if(user.role === "Admin") return true

    return{
        id:{
            equals: user.id,
        },
    }
}

export const Users: CollectionConfig = {
    slug:"users",
    auth: {
        verify:{
            generateEmailHTML:({token}) =>{
                return PrimaryActionEmailHtml({
                    actionLabel: "verify your account",
                    buttonText: "Verify Account",
                    href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`
                })
            }
        }
    },
    access:{
        read: adminsAndUser,
        create:()=>true,
        update:({req}) => req.user.role === "Admin",
        delete:({req}) => req.user.role === "Admin",

    },

    admin:{
        hidden:({user}) => user.role !=="Admin", 
        defaultColumns:['id'],
    },
    fields:[
        {
            name: "products",
            label: "products",
            admin:{
                condition:() => false,
            },
            type:"relationship",
            relationTo: "products",
            hasMany: true,
        },
      
        {
            name: "product_files",
            label: "product_files",
            admin:{
                condition:() => false,
            },
            type:"relationship",
            relationTo: "product_files",
            hasMany: true,
        },
        {
            name:'role',
            defaultValue: 'Admin',
            required: true,
            admin:{
                condition: () =>false,
            },
            type:"select",
            options:[
                {label:"Admin", value:'Admin'},
                {label:"User", value:'User'}
            ]
        }
    ]
}