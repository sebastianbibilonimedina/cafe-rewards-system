const { Shop } = require('../models');

// Crear una nueva tienda
exports.createShop = async (req, res) => {
    try {
        const shop = await Shop.create(req.body);
        res.status(201).json(shop);
    } catch (error) {
        res.status(500).json({ message: "Error al crear la tienda", error: error.message });
    }
};

// Obtener todas las tiendas
exports.getAllShops = async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.status(200).json(shops);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las tiendas", error: error.message });
    }
};

// Obtener una tienda específica por su ID
exports.getShopById = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);
        if (shop) {
            res.status(200).json(shop);
        } else {
            res.status(404).json({ message: "Tienda no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la tienda", error: error.message });
    }
};

// Actualizar una tienda
exports.updateShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);
        if (shop) {
            await shop.update(req.body);
            res.status(200).json(shop);
        } else {
            res.status(404).json({ message: "Tienda no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la tienda", error: error.message });
    }
};

// Eliminar una tienda
exports.deleteShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);
        if (shop) {
            await shop.destroy();
            res.status(200).json({ message: "Tienda eliminada exitosamente" });
        } else {
            res.status(404).json({ message: "Tienda no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la tienda", error: error.message });
    }
};
