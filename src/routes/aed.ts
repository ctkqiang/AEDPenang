import { Router } from 'express';

const aed = Router();

aed.get('/all', (req, res) => {
  res.send('List of users');
});

aed.get('/', (req, res) => {
  res.send('test');
});

export default aed;