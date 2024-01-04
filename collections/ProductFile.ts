import { User } from "../payload-types";
import { BeforeChangeHook } from "payload/dist/collections/config/types";
import { Access, CollectionConfig } from "payload/types";


const addUser:BeforeChangeHook = ({req,data}) => {
    const user = req.user as User | null

    return{...data,user:user?.id}
}

const yourOwnAndPurchased: Access = async({req}) => {
    const user = req.user as User | null

    if(user?.role === "Admin") return true
    if(!user) return false

    const {docs:products} = await req.payload.find({
        collection: "products",
        depth:0,
        where:{
            user:{
                equals:user.id
            }

        }
    }) 

    const ownProductFields = products.map((prod) => prod.product_files).flat()

    const {docs:orders} = await req.payload.find({
        collection: "orders",
        depth:0,
        where:{
            user:{
                equals:user.id
            }

        }
    })

}

export const ProductFiles: CollectionConfig = {
    slug: "product_files",
    admin:{
        hidden:({user}) => user.role !== 'admin',
    },
    hooks:{
        beforeChange:[addUser]
    },
    access:{
        read: yourOwnAndPurchased,
    },
    upload:{
        staticURL: "/product_files",
        staticDir: "product_files",
        mimeTypes: ["umage/*","font/*","application/postcript"]
    },
    fields:[
    {
        name:"user",
        type:"relationship",
        relationTo: "users",
        admin:{
            condition:()=>false,
        },
        hasMany:false,
        required: true,

    },
],
}