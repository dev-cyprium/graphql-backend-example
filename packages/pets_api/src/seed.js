const { models } = require("./db");

models.Pet.create({
  type: "CAT",
  name: "Chris",
});
models.Pet.create({
  type: "CAT",
  name: "Gigles",
});
models.Pet.create({
  type: "CAT",
  name: "Wafle",
});
models.Pet.create({
  type: "DOG",
  name: "Lily",
});
models.Pet.create({
  type: "DOG",
  name: "Orley",
});
models.Pet.create({
  type: "RABBIT",
  name: "Baby",
});
