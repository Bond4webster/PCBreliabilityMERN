import Acceptance from "../models/acceptanceModel.js";
 
export const getAllValues = async (req, res) => {
    try {
        const acceptanceValues = await Acceptance.findAll();
        res.json(acceptanceValues);
    } catch (error) {
        res.json({ message: error.message });
    }  
}