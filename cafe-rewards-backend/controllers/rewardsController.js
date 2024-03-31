const { Reward } = require('../models');

// Crear una nueva recompensa
exports.createReward = async (req, res) => {
    try {
        const reward = await Reward.create(req.body);
        res.status(201).json(reward);
    } catch (error) {
        console.error("Error al crear la recompensa:", error);
        res.status(500).json({ message: "Error al crear la recompensa", error: error.message });
    }
};

// Obtener todas las recompensas
exports.getAllRewards = async (req, res) => {
    try {
        const rewards = await Reward.findAll();
        res.status(200).json(rewards);
    } catch (error) {
        console.error("Error al obtener las recompensas:", error);
        res.status(500).json({ message: "Error al obtener las recompensas", error: error.message });
    }
};

// Obtener una recompensa específica por ID
exports.getRewardById = async (req, res) => {
    try {
        const reward = await Reward.findByPk(req.params.id);
        if (!reward) {
            return res.status(404).json({ message: "Recompensa no encontrada" });
        }
        res.status(200).json(reward);
    } catch (error) {
        console.error("Error al obtener la recompensa:", error);
        res.status(500).json({ message: "Error al obtener la recompensa", error: error.message });
    }
};

// Actualizar una recompensa
exports.updateReward = async (req, res) => {
    try {
        const reward = await Reward.findByPk(req.params.id);
        if (!reward) {
            return res.status(404).json({ message: "Recompensa no encontrada" });
        }
        await reward.update(req.body);
        res.status(200).json(reward);
    } catch (error) {
        console.error("Error al actualizar la recompensa:", error);
        res.status(500).json({ message: "Error al actualizar la recompensa", error: error.message });
    }
};

// Eliminar una recompensa
exports.deleteReward = async (req, res) => {
    try {
        const reward = await Reward.findByPk(req.params.id);
        if (!reward) {
            return res.status(404).json({ message: "Recompensa no encontrada" });
        }
        await reward.destroy();
        res.status(200).json({ message: "Recompensa eliminada exitosamente" });
    } catch (error) {
        console.error("Error al eliminar la recompensa:", error);
        res.status(500).json({ message: "Error al eliminar la recompensa", error: error.message });
    }
};
