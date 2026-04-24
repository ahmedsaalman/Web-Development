const Creature = require('../models/Creature');
exports.getCreatures = async (req, res) => {
const userId = req.session.userId;
if (!userId) return res.status(401).json({ error: 'Not logged in' });
const creatures = await Creature.find({ owner: userId });
res.json(creatures);
};


exports.addCreature = async (req, res) => {
const userId = req.session.userId;
if (!userId) return res.status(401).json({ error: 'Not logged in' });
    const { name, power } = req.body;
    const newCreature = new Creature({ name, power, owner: userId });
    await newCreature.save();
    res.status(201).json(newCreature);
};
