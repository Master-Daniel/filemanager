const Guest = require('../model/guest.model')

module.exports = {
    register: async (userData) => {
        const newUser = await Guest.create(userData);
        return newUser;
    }
}