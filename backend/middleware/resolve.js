export const resolve = async (req, res, next) => {
    try {
        const param = req.body.param;

        //----first parameter-----
        const E26 = 0.0000000013;
        const E27 = 0.000000000069;
        const E28 = 0.000000000017;
        
        param.kExploitation = Number(param.kExploitation);
        param.kAcceptance = Number(param.kAcceptance);
        param.layer = Number(param.layer);
        param.countHoles = Number(param.countHoles);
        param.a = Number(param.a);
        param.b = Number(param.b);
        param.kWidth = Number(param.kWidth);
        param.cMountConnect = Number(param.cMountConnect);
        param.cMetalConnect = Number(param.cMetalConnect);
        param.n1 = Number(param.n1);
        param.n2 = Number(param.n2);
        param.cycleCount = Number(param.cycleCount);
        param.cycleCount2 = Number(param.cycleCount2);

        const kLayer = param.layer <= 2 ? 1 : 0.7 * Math.sqrt(param.layer);
        const square = param.a * param.b;
        const countPrintedConductor = (+param.countHoles + Number(param.cMountConnect)) / 2;
        const сWaveSoldering = param.countHoles - param.cMetalConnect;
        const tauOn = param.sum1.reduce((prev, el) => {
            return prev += +el.tau;
        }, 0)
        const tauOff = 100 - tauOn;

        const I17 = param.countHoles * Math.sqrt(1 + param.countHoles / square);
        const M17 = countPrintedConductor * (1 + 0.1 * Math.sqrt(square)) / 3 * param.kWidth;
        const sumConnF = (param.cMountConnect * E26 + +сWaveSoldering * E27 + E28 * (param.n1 * kLayer + param.n2 * (kLayer + 13))) * param.kExploitation * param.kAcceptance;

        const H70 = param.sum1.reduce((prev, el) => {
            const kT = Math.exp(1740 * (1 / 303 - 1 / (273 + +el.t)))
            el.kT = kT;
            const res = kT * el.tau;
            return prev += res;
        }, 0) / (tauOn + tauOff)

        const O21 = (0.00111 * param.kExploitation * param.kAcceptance * kLayer * (I17 + M17) + sumConnF) * H70;
        //------------------------------

        //----second parameter-----
        const H77 = param.sum2.reduce((prev, el) => {
            el.kC = Math.pow(el.n, 0.76);
            const res = el.kC * Math.pow(el.t, 0.68);
            return prev += res;
        }, 0)
        const K26 = (1 + 0.003 * H77) * 0.000000001;

        //------------------------------

        const lambda = O21 * K26;

        const Pt = Math.exp(-1 * lambda * 8760);
        const tn = 8760 * tauOn / 100;

        req.body.param = { ...param, kLayer, square, countPrintedConductor, sumConnF, tauOn, tauOff, сWaveSoldering, lambda, Pt, tn }
        req.body.param.sum1 = JSON.stringify(param.sum1)
        req.body.param.sum2 = JSON.stringify(param.sum2)
        next()
    } catch (e) {
        res.status(401).send({ error: 'Введите корректные данные' })
    }
}
