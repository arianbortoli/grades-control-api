import express from 'express';
import { promises } from 'fs'; // to work with files
import winston from 'winston'; // to register logs

import swaggerUi from 'swagger-ui-express'; // package for documentation
import { swaggerDocument } from './doc.js'; // file with documentation

const app = express();

app.use(express.json());
app.use(cors());
