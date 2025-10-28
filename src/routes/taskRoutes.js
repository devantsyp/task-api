import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask } from '../middleware/validateTask.js';
import { validateSearchById } from '../middleware/validateSearchById.js';

const router = express.Router();

router.get('/', taskController.getTasks);
router.get('/:id', validateSearchById, taskController.getTaskById);
router.post('/', validateTask, taskController.createTask);

export default router;
