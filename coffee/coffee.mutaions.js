import client from "../client";
export default {
  Mutation: {
    createCoffee: (_, { name, production, country }) =>
      client.coffee.create({
        data: {
          name,
          production,
          country,
        },
      }),
    deleteCoffee: (_, { id }) => client.coffee.delete({ where: { id } }),
    updateCoffee: (_, { id, production }) =>
      client.coffee.update({ where: { id }, data: { production } }),
  },
};
