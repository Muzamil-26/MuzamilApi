import {Products} from '../models/products.models.js';

export const GetAllProducts= async (req,res)=>{
    const {price,title,category,sort,select} = req.query;
    let allObjects1 ={};
    if(price){
        allObjects1.price = price;
    }
    console.log(allObjects1);

    if(title){
        allObjects1.title = {$regex:title,$options :'i'};
    }
    if(category){
        allObjects1.category = {$regex:category,$options :'i'};
    }

    let apiData = Products.find(allObjects1);

    if(sort){
        let sortFixed = sort.replace(","," ");
        apiData.sort(sortFixed);
    }

    if(select){
        let selectFixed = select.split(",").join(" ");
        apiData.select(selectFixed);
    }
    
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 20;

    let skip = (page-1) * limit;

    apiData = apiData.skip(skip).limit(limit);

    

    const AllProducts = await apiData;


    return res.status(200).json({
        AllProducts,
        ngbhits:AllProducts.length
    })
}



export const GetAllProductsTesting= async (req,res)=>{
    const price = req.query;
    let allObjects1 ={};
    if(price){
        allObjects1.price = price;
    }
    // console.log(query);

    const AllProducts = await Products.find(allObjects1);


    return res.status(200).json({
        AllProducts,
    })
}










