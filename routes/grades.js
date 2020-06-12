import express from 'express';
import moment from 'moment';
import { promises } from 'fs';
import {
  insertGrades,
  updateGrades,
  getGrade,
  deleteGrade,
  getTotalGrade,
  getAvgGrade,
  getTop3,
} from '../controllers/gradesController.js';

const { readFile, writeFile } = promises;
const router = express.Router();

// insert grades in the array
router.post('/', async (req, res) => {
  try {
    let grade = await insertGrades(req.body);

    res.send(grade);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

// update grades by id
router.put('/:id', async (req, res) => {
  try {
    let grade = await updateGrades(req.params.id, req.body);

    res.send(grade);
  } catch (err) {
    logger.error(err);
    res.status(400).send('Essa grade informada não existe');
  }
});

// get grade by id
router.get('/:id', async (req, res) => {
  try {
    console.log('get');
    let grade = await getGrade(req.params.id);

    res.send(grade);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

// exclude grade by id
router.delete('/:id', async (req, res) => {
  try {
    console.log(`exclude - ${req.params.id}`);
    await deleteGrade(req.params.id);

    res.send();
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

// get total grade by student and subject
router.get('/totalGrade/:student/:subject', async (req, res) => {
  try {
    console.log('get - totalgrade');
    let grade = await getTotalGrade(req.params.student, req.params.subject);

    res.send({ grade });
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

// get average grade by student and subject
router.get('/avgGrade/:subject/:type', async (req, res) => {
  try {
    console.log('get - avggrade');
    let avgGrade = await getAvgGrade(req.params.subject, req.params.type);

    res.send({ avgGrade });
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

// get average grade by student and subject
router.get('/top3/:subject/:type', async (req, res) => {
  try {
    console.log('get - avggrade');
    let grades = await getTop3(req.params.subject, req.params.type);

    res.send(grades);
  } catch (err) {
    logger.error(err);
    res.status(400).send({ error: err.message });
  }
});

export default router;
