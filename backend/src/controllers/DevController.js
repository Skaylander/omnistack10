const axios = require("axios");
const Dev = require("../models/Dev");
const parseArrayAsString = require("../utils/parseStringAsArray");

// 5 funções no máximo: index(mostrar lista), show(mostrar um), store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseArrayAsString(techs); // .split(param) corta a string / .trim() remove espaçamentos antes e depois de uma string

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return res.json(dev);
  },

  async update(req, res) {
    dev = await Dev.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(dev);
  },

  async destroy(req, res) {
    dev = await Dev.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
