const express=require('express');
const ProductController=require('../controllers/ProductController')
const UserController=require('../controllers/UserController')
const router=express.Router();

//product

router.get('/ProductBrandList',ProductController.ProductBrandList)
router.get('/ProductCategoryList',ProductController.ProductCategoryList)
router.get('/ProductSliderList',ProductController.ProductSliderList)
router.get('/ProductListByBrand/:BrandID',ProductController.ProductListByBrand)
router.get('/ProductListByCategory/:CategoryID',ProductController.ProductListByCategory)
router.get('/ProductListBySmilier/:CategoryID',ProductController.ProductListBySmilier)
router.get('/ProductListByKeyword/:Keyword',ProductController.ProductListByKeyword)
router.get('/ProductListByRemark/:Remark',ProductController.ProductListByRemark)
router.get('/ProductDetails/:ProductID',ProductController.ProductDetails)
router.get('/ProductReviewList/:ProductID',ProductController.ProductReviewList)



//user
router.get('/UserOTP',UserController.UserOTP)
router.get('/VerifyLogin',UserController.VerifyLogin)
router.get('/UserLogout',UserController.UserLogout)
router.get('/CreateProfile',UserController.CreateProfile)
router.get('/UpdateProfile',UserController.UpdateProfile)
router.get('/ReadProfile',UserController.ReadProfile)




module.exports=router;