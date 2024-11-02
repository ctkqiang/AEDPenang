import { Router } from 'express';
import { GetAED } from '../controllers/get_data';
import { AED } from '../models/aed_model';

const aed = Router();

aed.get('/all', (req, res) => {
  const data = GetAED<AED>();

  console.info(`GET::[/aed/all]`);

  res.send(data);
});

export default aed;
