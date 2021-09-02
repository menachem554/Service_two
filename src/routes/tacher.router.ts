import express from 'express';
import * as tacherController from '../controllers/tacer.controller';

const router = express.Router();

router.post('/newTacher', tacherController.postTacher);
router.get('/TID', tacherController.getTacher);
router.put('/editTacher', tacherController.editTacher);
router.delete('/del', tacherController.delTacher);
router.get('/tacherID/:tacherID', tacherController.getTacherStudents);
router.get('/outsanding', tacherController.getOutsandingTacher);
router.get('/', tacherController.test);

export default router;
