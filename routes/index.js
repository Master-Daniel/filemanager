// const express = require('express');
// const router = express.Router();
// const db  = require('../config/dbConnection');
// const { signupValidation, loginValidation } = require('../config/validation');
// const { validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // Create account
// router.post('/signup', signupValidation, (req, res, next) => {
//     db.query(
//         `SELECT * FROM tbl_login WHERE LOWER(email) = LOWER(${db.escape(req.body.email)});`,
//         (error, result) => {
//             if (result.length) {
//                 return res.status(409).send({
//                     message: 'Email address already exist'
//                 });
//             } else {
//                 bcrypt.hash(req.body.password, 10, (error, hash) => {
//                     if (error) {
//                         return res.status(500).send({
//                             message: error
//                         });
//                     } else {
//                         db.query(
//                             `INSERT INTO tbl_login (email, password) VALUES ('${req.body.email}', ${db.escape(hash)})`,
//                             (error, result) => {
//                                 if (error) {
//                                     return res.status(400).send({
//                                         message: error
//                                     })
//                                 };
//                                 return res.status(201).send({
//                                     message: 'Account created successfully'
//                                 })
//                             }
//                         )
//                     }
//                 })
//             }
//         }
//     )
// })

// // Login route
// router.post('/login', loginValidation, (req, res, next) => {
//     db.query(
//         `SELECT * FROM tbl_login WHERE email = ${db.escape(req.body.email)}`,
//         (error, result) => {
//             if (error) {
//                 return res.status(400).send({
//                     message: error
//                 })
//             }
//             if (!result.length) {
//                 return res.status(401).send({
//                     message: 'no user with such email address'
//                 })
//             }
//             bcrypt.compare(
//                 req.body.password, result[0]['password'], (bError, bResult) => {
//                     if (bError) {
//                         return res.status(401).send({
//                             message: 'Incorrect password'
//                         })
//                     }
//                     if (bResult) {
//                         const token = jwt.sign({ id: result[0].id}, 'elite-codec-software-and-engineering', { expiresIn: '1hr'});
//                         db.query(
//                             `UPDATE tbl_login SET last_login = now() WHERE id = '${result[0].id}'`
//                         );
//                         return res.status(200).send({
//                             message: 'Login successful',
//                             token: token,
//                             user: result[0]
//                         })
//                     }
//                     return res.status(401).send({
//                         message: 'Incorrect login details'
//                     })
//                 }
//             )
//         }
//     )
// })

// router.post('/get-user', signupValidation, (req, res) => {
//     if (
//         !req.headers.authorization || 
//         !req.headers.authorization.startsWith('Bearer') || 
//         !req.headers.authorization.split(' ')[1]
//     ) {
//         return res.status(422).json({
//             message: 'Unauthorized'
//         })
//     }

//     const token = req.headers.authorization.split(' ')[1]
//     const decoded = jwt.verify(token, 'elite-codec-software-and-engineering');

//     db.query(
//         `SELECT * FROM tbl_login WHERE id = ?`, decoded.id, function (error, results, fields) {
//             if (error) throw error;
//             return res.send({error: false, data: results[0], message: 'User data fetched successfully'})
//         }
//     )
// })

// module.exports = router;