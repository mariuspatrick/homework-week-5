const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

router.post("/movie", (req, res, next) => {
  Movie.create(req.body)
    .then(res)
    .catch(err => next(err));
});

router.get("/movie", (req, res) => {
  Movie.findAll().then(result => res.send(result));
});

router.get("/movie/:id", (req, res) => {
  Movie.findByPk(req.params.id).then(movie => res.send(movie));
});

router.put("/movie/:id", (req, res, next) => {
  Movie.findByPk(req.params.id)
    .then(movie => movie.update(req.body))
    .then(updatedMovie => res.send(updatedMovie));
});

router.delete("/movie/:id", (req, res, next) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(movie => res.send({ movie }))
    .catch(next);
});

router.get("/movie", (req, res, next) => {
  const limit = Math.min(req.query.limit || 10, 500);
  const offset = req.query.offset || 0;

  Movie.findAndCountAll({ limit, offset })
    .then(result => res.send({ data: result.row, total: result.count }))
    .catch(error => next(error));
});

module.exports = router;
