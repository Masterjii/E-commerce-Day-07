
// 15th Jan Lecture 56 Time 1:34 Hours


const Product = require('./models/Product');
const {productSchema , reviewSchema} = require('./schema');


const validateProduct = (req,res,next) =>{
    let {name, img, price, desc} = req.body;
    const{error} = productSchema.validate({name, img, price, desc})
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('error', {err:msg})
    }
    next();
}

const validateReview = (req,res,next) =>{
    let {rating, comment} = req.body;
    const{error} = reviewSchema.validate({rating, comment})
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('error', {err:msg})
    }
    next();
}

const isLoggedIn = (req,res,next) =>{

    if (req.xhr && !req.isAuthenticated()) {
        return res.error({msg: 'You need to login first'});
        // console.log(req.xhr);  // ajax hai ya nhi ?
    };

    if (!req.isAuthenticated()) {
        req.flash('error', 'You need to first login');
        return res.redirect('/login');
    } 
    next();
}

const isSeller = (req,res,next) =>{
    let {id} = req.params;
    if(!req.user.role){
        req.flash('error', 'You do not have permissions');
        return res.redirect('/products');
    } 
    else if(req.user.role !== "seller"){
        req.flash('error', 'You do not have permissions');
        return res.redirect(`/products/${id}`);
    }
     next();
}

const isProductAuthor = async (req,res,next) =>{
   let {id} = req.params;
   let product = await Product.findById(id);
   console.log(product.author, 'author');   //objectId
   console.log(req.user, 'user');   // objectId
   if(!product.author.equals(req.user._id)){
    req.flash('error', 'You are not the owner of this product');
    return res.redirect(`/products/${id}`);
   }
    next();
}


module.exports = {validateProduct, validateReview, isLoggedIn, isSeller, isProductAuthor};















