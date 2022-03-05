import express from "express";

import {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";

import { getAllValues } from "../controllers/KWidth.js";

const router = express.Router();

router.get('/kwidth', getAllValues);

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);



router.post('/sum', function (req, res) {
    const param = req.body.param;

    param.sum1 = [{t:33,tau:23.8},{t:38,tau:23.8}]

    //----first parameter-----
    const E26 = 0.0000000013;
    const E27 = 0.000000000069;
    const E28 = 0.000000000017;
    const kLayer = param.layer <= 2 ? 1 : 0.7 * Math.sqrt(param.layer);
    const square = param.width * param.length;
    const E7 = (+param.countHoles + Number(param.cMountConnect)) / 2;
    const E30 = param.countHoles - param.cMetalConnect;
    const E16 = param.sum1.reduce((prev, el) => {
        return prev += el.tau;
    }, 0)
    const E17 = 100 - E16;
    
    const I17 = param.countHoles * Math.sqrt(1 + param.countHoles / square);
    const M17 = E7 * (1 + 0.1 * Math.sqrt(square)) / 3 * param.kWidth;
    const E9 = (param.cMountConnect * E26 + E30 * E27 + E28 * (param.n1 * kLayer + param.n2 * (kLayer + 13))) * param.kExploitation * param.kAcceptance;

    const H70 = param.sum1.reduce((prev, el) => {
        const kT = Math.exp(1740 * (1 / 303 - 1 / (273 + el.t)))
        const res = kT * el.tau;
        return prev += res;
    }, 0) / (E16 + E17)
    
    const O21 = (0.00111 * param.kExploitation * param.kAcceptance * kLayer * (I17 + M17) + E9) * H70;
    //------------------------------

    //----second parameter-----
    const H77 = param.sum2.reduce((prev, el) => {
        const res = Math.pow(el.n, 0.76) * Math.pow(el.t, 0.68);
        return prev += res;
    }, 0)
    const K26 = (1 + 0.003 * H77) * 0.000000001;
    
    //------------------------------

    const lambda = O21 * K26;

    const Pt = Math.exp(-1 * lambda * 8760);
    const tn = 8760*E16/100;

    res.json({ ...param,kLayer,square,E7,E9,E16,E17,E30, lambda,Pt,tn })
    res.send('200');
});

export default router;