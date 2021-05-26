import bycrpt from "bcrypt";
import client from "../client";

export default {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarUrl, githubUsername }
    ) => {
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            },
            {
              githubUsername,
            },
          ],
        },
      });
      const hashPassword = await bycrpt.hash(password, 10);
      return client.user.create({
        data: {
          username,
          email,
          name,
          location,
          password: hashPassword,
          avatarUrl,
          githubUsername,
        },
      });
    },
  },
};
