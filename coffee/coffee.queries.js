import client from "../client";
export default {
  Query: {
    coffee: () => client.coffee.findMany(),
    cafe: (_, { id }) => client.coffee.findUnique({ where: { id } }),
  },
};
