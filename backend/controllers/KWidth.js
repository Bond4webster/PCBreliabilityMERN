import KWidth from "../models/kWidthModel.js";
 
export const getAllValues = async (req, res) => {
    try {
        const kWidthValues = await KWidth.findAll();
        res.json(kWidthValues);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
