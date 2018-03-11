const CONFIG = {
    PORT: process.env.KZW_PORT || 3000,
    DB_URL: process.env.LINK_DB_URL || 'mongodb://Ogamiq:kzwPower123@ds046677.mlab.com:46677/kzwdb',
    DB_URL_AUTH: {
        PASSWORD: "kzwPower123",
        USER: "Ogamiq",
    },
    HASH_PASSWORD_SECRET: process.env.HASH_PASSWORD_SECRET || 'shhhhh'
};

module.exports = CONFIG;
