const guestService = require('../services/guestService');
const { validationResult } = require('express-validator');

module.exports = {
    register: async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const user = await guestService.register(req.body);
            res.status(201).send(user)
        } catch (error) {
            next(error)
        }
    }
}