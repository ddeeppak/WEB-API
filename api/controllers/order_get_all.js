const Order= require('../modules/order');
exports.get_all_order=(req,res,next)=>{
    Order.find()
        .select('orderNumber totalquantity totalamount status')
        .exec()
        .then(result =>{
            res.status(200)
            .json(result);
        })
        .catch(err =>{
            console.log(err);
        })
    
}