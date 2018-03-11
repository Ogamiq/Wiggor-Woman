const IS_PROD = (process.env.NODE_ENV === "production");
const IS_TEST_MODE = (process.env.TEST_MODE === "true");

const CONFIG = {
    PORT: (IS_PROD) ? process.env.KZW_PORT : 3000,
    DB_URL: ((IS_PROD) ? process.env.LINK_DB_URL : 'mongodb://Ogamiq:kzwPower123@ds046677.mlab.com:46677/kzwdb'),
    DB_URL_AUTH: {
        PASSWORD: "kzwPower123",
        USER: "Ogamiq",
    },
    HASH_PASSWORD_SECRET: ((IS_PROD) ? process.env.HASH_PASSWORD_SECRET : 'shhhhh')
};

module.exports = CONFIG;
