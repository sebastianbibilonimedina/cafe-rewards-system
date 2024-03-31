const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        static associate(models) {
            // Aquí puedes definir asociaciones como pertenecer a muchas cafeterías si es aplicable
            // O si los productos están asociados a pedidos específicos.
        }
    }
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        price: DataTypes.DECIMAL,
        // Puedes agregar más campos aquí según sea necesario, como 'categoryId' si tienes categorías de productos.
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};
