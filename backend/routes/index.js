import express from "express";
 
import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";

import {getAllValues} from "../controllers/KWidth.js";
 
const router = express.Router();
 
router.get('/kwidth',getAllValues);

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);



router.post('/sum',function(req,res){
    const param = req.body.param;
    const result = 1.11e-3 * param.kExploitation * param.kAcceptance * param.kLayer * (param.countHoles * Math.sqrt(1 + param.countHoles / (param.lengthPcb * param.widthPcb) ) + param.countPrintedConductor * ( 1+0.1 * Math.sqrt(param.lengthPcb * param.widthPcb))/3 * param.kWidth);
    //kExploitation kAcceptance kLayer countHoles lengthPcb widthPcb countPrintedConductor kWidth
    // a=(1.11e-3*2*1*1*(338*Math.sqrt(1+338/320)+224*(1+0.1*Math.sqrt(320))/3*1))   .toFixed(16) -сначала до суммы лямбда соединений
    //b=((110*1.3e-9+326*6.9e-11+1.7e-11*(0*1+12*(1+13)))*2*1) - сумма лямбда соединений
    //c = ((0.238*1.06+0.238*1.16)/(0.477+0.523))-этапы работы с суммой этапов и тау
    //d=(1+3e-3*((68.65*Math.pow(23,0.68))+(68.65*Math.pow(18,0.68))+(68.65*Math.pow(10,0.68))+(34.12*Math.pow(7,0.68)))) - циклы
    //итог res=(a+b)*c*d 4.532761755344466e-9
    res.json({result})
    res.send('200');
});
 
export default router;