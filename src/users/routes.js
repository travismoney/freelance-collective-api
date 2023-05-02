const express = require('express');
const controller = require('./controller/index');
const validateSchemas = require('../../middlewares/validateSchemas');
const schemas = require('./utils/schemasValidation');
const router = express.Router();

// POST User
router.post('/api/v1/user', validateSchemas.inputs(schemas.insertUser, 'body'), (req, res) => {
    controller.insertUser(req, res);
  }
);

// GET Users
router.get('/api/v1/users', (req, res) => {
    controller.getAllUsers(req, res);
  }
);

// GET User
router.get('/api/v1/user/:id', (req, res) => {
    controller.getUser(req, res);
  }
);

// DELETE User
router.delete('/api/v1/user/:id', (req, res) => {
    controller.deleteUser(req, res);
  }
);

// PUT User
router.put('/api/v1/user/:id',(req, res) => {
    controller.updateUser(req, res);
  }
);

module.exports = router;
