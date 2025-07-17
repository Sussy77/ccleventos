const { Evento } = require('../models');

exports.getAllEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getEventoById = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    if (evento) {
      res.json(evento);
    } else {
      res.status(404).json({ message: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEvento = async (req, res) => {
  try {
    const evento = await Evento.create(req.body);
    res.status(201).json(evento);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateEvento = async (req, res) => {
  try {
    const [updated] = await Evento.update(req.body, {
      where: { eventoId: req.params.id }
    });
    if (updated) {
      const updatedEvento = await Evento.findByPk(req.params.id);
      res.json(updatedEvento);
    } else {
      res.status(404).json({ message: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteEvento = async (req, res) => {
  try {
    const deleted = await Evento.destroy({
      where: { eventoId: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Evento no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
