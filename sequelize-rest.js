const { Router } = require("express");
const Movie = require("./model");

const router = new Router();

//I tried inserting the movies while creating the table

const movies = [
  {
    id: 1,
    title: "Star Wars",
    yearOfRelease: "1977",
    synopsis:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader"
  },
  {
    id: 2,
    title: "Harry Potter and the Sorcerer's Stone",
    yearOfRelease: "2001",
    synopsis:
      "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world."
  },
  {
    id: 3,
    title: "The Matrix",
    yearOfRelease: "1999",
    synopsis:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers"
  },
  {
    id: 4,
    title: "Toy Story",
    yearOfRelease: "1995",
    synopsis:
      "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
  }
];

router.post("/movie", (req, res, next) => {
  console.log("Movies here: ", movies);
  console.log("req.body here: ", req.body);
  Movie.create(movies.forEach(movie => movie))
    .then(res)
    .catch(err => next(err));
});

module.exports = router;
