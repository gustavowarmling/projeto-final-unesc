const Album = require('../models/album.js');

module.exports = {
    async index(request, response) {
        const albuns = await Album.find();

        return response.json(albuns);
    },

    async show(request, response) {
        const { 
            id,
        } = request.params;

        let album = await Album.findOne({ _id: id });

        if (!album) {
            response.status(404).send("Album não encontrado");
        };

        return response.json(album);
    },

    async create(request, response) {
        const { 
            nome,
            artista,
            ano,
            generos,
            faixas,
            lancamento,
        } = request.body;

        let album = await Album.findOne({ nome });

        if (!album) {
            const generosArray = generos.split(',').map(genero => genero.trim());
            const faixasArray = faixas.split(',').map(faixa => faixa.trim());

            album = await Album.create({
                nome,
                artista,
                ano,
                generos: generosArray,
                faixas: faixasArray,
                lancamento,
            });

            response.json(album);
        };

        response.send({
            message: "Album já cadastrado",
            status: 200,
        });
    }
};