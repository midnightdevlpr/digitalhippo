import { PRODUCT_CATEGORIES } from "@/config/Index";
import { CollectionConfig } from "payload/types";

export const Products:CollectionConfig = {
    slug: "products",
    admin: {
        useAsTitle: "name"
    },
    access:{

    },
    fields:[
        {
            name:"user",
            type: "relationship",
            relationTo: "users",
            required: true,
            hasMany: false,
            admin:{
                condition: () =>false,
            }
        },
        {
            name:"name",
            label: "Name",
            type: "text",
            required: true,
        }, 
        {
            name:"description",
            label: "Product details",
            type: "textarea",
        }, 
        {
            name:"price",
            label: "Price in Kes",
            type: "number",
            min:0,
            max: 1000,
            required: true,
        }, 
        {
            name:"category",
            label: "Category",
            type: "select",
            options: PRODUCT_CATEGORIES.map(({label,value})=>({label,value}))
        }
    ]
}