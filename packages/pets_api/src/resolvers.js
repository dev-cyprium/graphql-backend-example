module.exports = {
  Query: {
    pets(_, __, { models }) {
      return models.Pet.findMany({});
    },
  },
  // Mutation: {},
  Pet: {
    img(pet) {
      return pet.type === "DOG"
        ? "https://placedog.net/300/300"
        : "http://placekitten.com/300/300";
    },
  },
  // User: {},
};
