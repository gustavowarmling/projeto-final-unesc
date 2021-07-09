const axios = require('axios');

const Designer = require('../models/Designer.js');

const api = axios.create({
	baseURL: 'https://projeto-final-mateus.herokuapp.com/',
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
            let designer = await Designer.findOne({ _id: id });

            if (!designer) {
                response.status(401)
                    .json({ error: 'Designer não encontrado' });
            };

            const marca = await api.get(`/brand/${designer.marcaId}`);

            if (!marca) {
                response.status(401)
                    .json({ error: 'Marca não encontrada' });
            };

            const {
                nome,
                social,
                nascimento,
            } = designer;

            const designerToShow = {
                nome,
                social,
                nascimento,
                marca: marca.data,
            };

            return response.json(designerToShow);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async create(request, response) {
        const { 
            nome,
            social,
            nascimento,
            marcaId,
        } = request.body;

        try {
            const designer = await Designer.findOne({ nome });

            if (designer) {
                response.status(409)
                .json({ error: 'Designer, com o nome informado, já cadastrado!' })
            };

            const newDesigner = await Designer.create({
                nome,
                social,
                nascimento,
                marcaId,
            });

            return response.json(newDesigner);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async update(request, response) {
        const { id } = request.params;
        const {
            nome,
            social,
            nascimento,
            marcaId,
        } = request.body;

        try {
            const designer = await Designer.findOne({ _id: id });

            if (!designer) {
                response.status(401)
                .json({ error: 'Designer não encontrado' });
            };
    
            await designer.updateOne({
                nome,
                social,
                nascimento,
                marcaId,
            });
    
            const modifiedDesigner = await Designer.findOne({ _id: id });
    
            return response.json(modifiedDesigner);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async delete(request, response) {
        const { 
            id,
        } = request.params;

        try {
            const designer = await Designer.findOne({ _id: id });

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

