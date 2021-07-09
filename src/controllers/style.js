const Style = require('../models/Style.js');

module.exports = {
    async index(request, response) {
        const { page, pageSize, ...filters } = request.query;

        const pagination = {
            pageSize: Number(pageSize),
            skip: (Number(page) - 1) * Number(pageSize),
        };

        const styles = await Style.find({ ...filters })
        .limit(pagination.pageSize)
        .skip(pagination.skip);

        return response.status(styles.length ? 200 : 204).json(styles);
    },

    async show(request, response) {
        const { 
            id,
        } = request.params;

       try {
            const style = await Style.findOne({ _id: id });

            if (!style) {
                response.status(401)
                    .json({ error: 'Estilo não encontrado' });
            };

            return response.json(style);
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
            const style = await Style.findOne({ nome });

            if (style) {
                response.status(409)
                .json({ error: 'Estilo, com o nome informado, já cadastrado!' })
            };

            const newStyle = await Style.create({
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
            const style = await Style.findOne({ _id: id });

            if (!style) {
                response.status(401)
                .json({ error: 'Estilo não encontrado' });
            };
    
            await style.updateOne(body);
    
            return response.json(style);
        } catch (error) {
            return response.status(400).json({ error });
        }
    },

    async delete(request, response) {
        const { 
            id,
        } = request.params;

        try {
            const style = await Style.findOne({ _id: id });

            if (!style) {
                response.status(401)
                .json({ error: 'Estilo não encontrado' });
            };
            
            await style.delete();
    
            return response.json({ message: 'Estilo deletado com sucesso!' });
        } catch (error) {
            return response.status(400).json({ error });
        }
    },
};

