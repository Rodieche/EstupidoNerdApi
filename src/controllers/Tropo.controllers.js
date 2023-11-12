import { GetTropos } from "../services/Tropos.services"

export const getTropos = async (req, res, next) => {
    const tropos = await GetTropos();
    res.status(200).json({tropos});
}