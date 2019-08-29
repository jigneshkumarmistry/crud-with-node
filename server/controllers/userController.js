const User = require('../models').User;

/**
 * Create new user method
 * 
 * @param {*} req 
 * @param {*} res 
 */
function create(req, res) {
    return User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    }).then(user => res.status(201).send(user))
    .catch(error => res.status(400).send(error));
}

/**
 * Update user 
 * 
 * @param {*} req 
 * @param {*} res 
 */
function update(req, res) {
    const id = req.params.id;
    let updateValues = { 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    };
    return User.update(updateValues, { where: { id: id } }).then((result) => {
        res.status(200).send(result);
    }).catch(error => res.status(400).send(error)); 
}

/**
 * Get all user
 * 
 * @param {*} req 
 * @param {*} res 
 */
function getAll(req, res) {
    return User.findAll().then(users =>{
        res.status(200).send(users)
   }).catch(error => req.status(400).send(error));
}

/**
 * Get user by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
function getById(req, res) {
    const id = req.params.id;
    return User.findByPk(id).then(user => {
         res.status(200).send(user)
       }).catch(error =>  req.status(400).send(error));
}

/**
 * Delete user by id 
 * 
 * @param {*} req 
 * @param {*} res 
 */
function deleteById(req, res) {
    const id = req.params.id;
    return User.destroy({ where: { id: id } }).then((result) => {
        res.status(200).json({ success: true, method: req.method, path: req.path });  
    }).catch(error => res.status(400).send(error));
}

module.exports = {
    create,
    update,
    getAll,
    getById,
    deleteById
}