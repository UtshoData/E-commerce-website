const BrandModel=require('../models/BrandModel')
const CategoryModel=require('../models/CategoryModel')
const ProductSliderModel=require('../models/ProductSliderModel')
const ProductModel=require('../models/ProductModel')
const ProductDetailModel=require('../models/ProductDetailModel')
const ReviewModel=require('../models/ReviewModel')
const mongoose =require('mongoose');







const BrandListService=async()=>{
    try{
        let data = await BrandModel.find();
        return {status:"success", data:data}
    }
    catch(e){
        return{status:"failed",data:e}.toString()

    }

}

const CategoryListService=async()=>{
    try{
        let data = await CategoryModel.find();
        return {status:"success", data:data}
    }
    catch(e){
        return{status:"failed",data:e}.toString()

    }

}



const SliderListService=async()=>{
    try{
        let data = await ProductSliderModel.find();
        return {status:"success", data:data}
    }
    catch(e){
        return{status:"failed",data:e}.toString()

    }


}


const ListByBrandService=async()=>{

}


const ListByCategoryService=async()=>{

}


const ListBySmilierService=async()=>{

}


const ListByKeywordService=async()=>{

}


const ListByRemarkService=async()=>{

}


const DetailsService=async()=>{

}


const ReviewListService=async()=>{

}



module.exports={
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByCategoryService,
    ListByBrandService,
    ListByRemarkService,
    ListBySmilierService,
    ListByKeywordService,
    DetailsService,
    ReviewListService

}