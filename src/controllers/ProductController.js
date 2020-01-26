const Product = require('../models/Product');

module.exports = {
    async index(request, response) {
        const products = await Product.find();

        return response.json(products);
    },

    async show(request, response) {
        const product = await Product.findById(request.params.id);

        return response.json(product);
    },

    async store(request, response) {
        const { name, price, _id } = request.body;

        product = await Product.create({
            name,
            price,
            _id,
        })

        return response.json(product);
    },

    async update(request, response) {
        const { name, price, _id }  = request.body; 
        const id = request.params.id;

        await Product.findByIdAndUpdate(id, {
            name,
            price,
        }, {
            useFindAndModify: false,
        });

        const product = await Product.findById(id);

        return response.json(product);
    },

    async destroy(request, response) {
        const id = request.params.id;

        product = await Product.findByIdAndDelete(id, {
            useFindAndModify: false,
        });

        return response.json(product);
    },
};