const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ONGController = require('./controllers/ONGController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', ONGController.index);

routes.post(
  '/ongs',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.number()
        .required()
        .integer()
        .min(10000000000)
        .max(99999999999),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  ONGController.store,
);

routes.get(
  '/incidents',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),
  IncidentController.index,
);

routes.post(
  '/incidents',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required().length(8),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
  }),
  IncidentController.store,
);

routes.delete(
  '/incidents/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete,
);

routes.get(
  '/profile',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required().length(8),
    }).unknown(),
  }),
  ProfileController.index,
);

routes.post(
  '/sessions',
  celebrate({
    [Segments.BODY]: Joi.object({
      id: Joi.string().required().length(8),
    }),
  }),
  SessionController.store,
);

module.exports = routes;
