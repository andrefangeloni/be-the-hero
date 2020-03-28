const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const incidents = await connection('incidents').select('*');

    return res.json(incidents);
  },

  async store(req, res) {
    const ong_id = req.headers.authorization;
    const { title, description, value } = req.body;

    const [id] = await connection('incidents').insert({
      ong_id,
      title,
      description,
      value,
    });

    return res.status(201).json({ id });
  },

  async delete(req, res) {
    const ong_id = req.headers.authorization;
    const { id } = req.params;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ message: 'Operation not permitted!' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    return res.status(204).send();
  },
};
