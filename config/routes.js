const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../app/middlewares/authenticate')

const usersController = require('../app/controllers/usersController')
const tasksController = require('../app/controllers/tasksController')

router.post('/api/users/register', usersController.register)
router.post('/api/users/login', usersController.login)
router.get('/api/users/account', authenticateUser, usersController.account)
router.delete('/api/users/logout', authenticateUser, usersController.logout)


router.get('/api/tasks', authenticateUser, tasksController.list)
router.post('/api/tasks', authenticateUser, tasksController.create)
router.get('/api/tasks/:id', authenticateUser, tasksController.show)
router.put('/api/tasks/:id', authenticateUser, tasksController.update)
router.delete('/api/tasks/:id', authenticateUser, tasksController.destroy)

module.exports = router
