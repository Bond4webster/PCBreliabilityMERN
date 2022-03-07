import History from "../models/historyModel.js";
 
export const getAllHistories = async (req, res) => {
    try {
        const histories = await History.findAll();
        res.json(histories);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getHistoryById = async (req, res) => {
    try {
        const history = await History.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(history[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createHistory = async (req, res) => {
    try {
        await History.create(req.body.param).then( function ( x ) {
            res.json( x.id );
        } );
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
// export const updateHistory = async (req, res) => {
//     try {
//         await History.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "History Updated"
//         });
//     } catch (error) {
//         res.json({ message: error.message });
//     }  
// }
 
export const deleteHistory = async (req, res) => {
    try {
        await History.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "History Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}