import Description from "../models/descriptionModel.js";
 
export const getAllValues = async (req, res) => {
    try {
        const descriptionValues = await Description.findAll();
        res.json(descriptionValues);
    } catch (error) {
        res.json({ message: error.message });
    }  
}