import { GetTropos } from "../services/Tropos.services"

export const getTropos = async (req, res) => {
    const tropos = await GetTropos();
    res.status(200).json({tropos});
}

export const getTropo = async (req, res) => {
    const { id } = req.params;
    let tropo = await GetTropos({ filterBy: id });
    tropo = tropo[0];
    res.status(200).json({tropo});
}