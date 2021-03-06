const Dev = require("../models/Dev");
const parseArrayAsString = require("../utils/parseStringAsArray");

module.exports = {
  async index(req, res) {
    // Buscar todos devs num raio de 10km
    // Filtrar por tecnologias
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseArrayAsString(techs);

    const devs = await Dev.find({
      techs: {
        //$regex?
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return res.json({ devs });
  }
};
