const axios = require('axios');

const Designer = require('../models/Designer.js');

const api = axios.create({
	baseURL: '#',
});

module.exports = {
    async index(request, response) {
        const { page, pageSize, ...filters } = request.query;

        const pagination = {
            pageSize: Number(pageSize),
            skip: (Number(page) - 1) * Number(pageSize),
        };

        try {
            const styles = await Designer.find({ ...filters })
            .limit(pagination.pageSize)
            .skip(pagination.skip);
    
            return response.status(styles.length ? 200 : 204).json(styles);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async show(request, response) {
        const { 
            id,
        } = request.params;

        try {
            let designer = await Designer.findById({ id });

            if (!designer) {
                response.status(401)
                    .json({ error: 'Designer não encontrado' });
            };

            const marca = await api.get(`/brand/${designer.marcaId}`);

            designer.marca = marca?.data;

            return response.json(designer);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async create(request, response) {
        const { 
            nome,
            descricao,
            ano,
            surgimento,
        } = request.body;

        try {
            const designer = await Designer.findOne({ nome });

            if (designer) {
                response.status(409)
                .json({ error: 'Designer, com o nome informado, já cadastrado!' })
            };

            const newStyle = await Designer.create({
                nome,
                descricao,
                ano,
                surgimento,
            });

            return response.json(newStyle);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async update(request, response) {
        const { id } = request.params;
        const body = request.body;

        try {
            const designer = await Designer.findById(id);

            if (!designer) {
                response.status(401)
                .json({ error: 'Designer não encontrado' });
            };
    
            await designer.updateOne(body);
    
            return response.json(designer);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async delete(request, response) {
        const { 
            id,
        } = request.params;

        try {
            const designer = await Designer.findById({ id });

            if (!designer) {
                response.status(401)
                .json({ error: 'Designer não encontrado' });
            };
            
            await designer.delete();
    
            return response.json({ message: 'Designer deletado com sucesso!' });
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
};

