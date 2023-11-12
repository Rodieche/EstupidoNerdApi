import { notion } from '../config';

const DATABASE_ID = process.env.DATABASE_ID;

export const GetTropos = async({filterBy} = {}) => {
    const query = { database_id: DATABASE_ID };

    if(filterBy){
        query.filter = {
            property: 'slug',
            rich_text: {
                equals: filterBy
            }
        }
    }

    const { results } = await notion.databases.query(query);

    const tropo = results.map(t => {
        return {
            slug: t.properties.slug.formula.string,
            tropo: t.properties.Tropo.title[0].plain_text,
            season: t.properties.Temporada.number,
            episode: t.properties.Episodio.number,
            denomination: t.properties.Denominacion.rich_text[0]?.plain_text,
            description: t.properties.Descripcion.select.name
        }
    });
    
    return tropo;
}
