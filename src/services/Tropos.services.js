import { notion } from '../config';

const DATABASE_ID = process.env.DATABASE_ID;

export const GetTropos = async() => {
    const { results } = await notion.databases.query({
        database_id: DATABASE_ID,
    })
    const tropo = results.map(t => {
        return {
            tropo: t.properties.Tropo.title[0].plain_text,
            season: t.properties.Temporada.number,
            episode: t.properties.Episodio.number,
            denomination: t.properties.Denominacion.rich_text[0]?.plain_text,
            description: t.properties.Descripcion.select.name
        }
    })
    return tropo;
}
