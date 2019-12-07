const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

router.post("/movie", (req, res, next) => {
  Movie.create(req.body)
    .then(res)
    .catch(err => next(err));
});

module.exports = router;
