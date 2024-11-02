import app from './app';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AED Server is running on http://localhost:${PORT}`);
});
