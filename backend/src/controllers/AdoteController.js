const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const adote = await connection('adote')
            .join('ongs', 'ongs.id', '=', 'adote.ong_id')
            .select([
            'adote.*', 
            'adote.nome', 
            'adote.descricao', 
            'adote.img'
            ]);

        return response.json(adote);
    },  

    async indexId(request, response) {
    const { ong_id } = request.query;

    const { page = 1 } = request.query;

    const [count] = await connection('adote').where('ong_id',ong_id).count();

    const adote = await connection('adote')
        .join('ongs', 'ongs.id', '=', 'adote.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .where('ong_id',ong_id)
        .select([
        'adote.*', 
        'adote.nome', 
        'adote.descricao', 
        'adote.img'
        ]);

    response.header('X-Total-Count', count['count(*)']);    

    return response.json(adote);
    },
};