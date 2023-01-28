export const environments = {
  HASURA: {
    SECRET: process.env.HASURA_SECRET_KEY || "",
    URL: process.env.HASURA_URL_ENDPOINT || "",
  },
  JWT: {
    SECRET: process.env.JWT_SECRET || "",
  },
  NODEMAILER: {
    USER: process.env.NODEMAILER_USER,
    PASSWORD: process.env.NODEMAILER_PASSWORD,
  },
};
