import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
    slug:"users",
    auth: {
        verify:{
            generateEmailHTML:({token}) =>{
                return `<a href='${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}'>Please Verify your email</a>`
            }
        }
    },
    access:{
        read: () => true,
        create:()=>true,
    },
    fields:[
        {
            name:'role',
            defaultValue: 'admin',
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