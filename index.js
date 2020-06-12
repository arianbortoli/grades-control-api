import express from 'express';
import { promises } from 'fs'; // to work with files
import winston from 'winston'; // to register logs
import swaggerUi from 'swagger-ui-express'; // package for documentation
import { swaggerDocument } from './doc.js'; // file with documentation
import cors from 'cors'; // package for policy managment
import gradesRouter from './routes/grades.js';

const { readFile, writeFile } = promises;

global.gradesArray = [];
global.next;
global.FileName = 'grades.json';

// format for log text
const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] - ${level}: ${message}`;
});

// log creation
global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'grades-control-api.log' }),
  ],
  format: combine(
    label({ label: 'grades-control-api' }),
    timestamp(),
    myFormat
  ),
});

const app = express();

app.use(express.json());
app.use(cors());

// endpoint for API documentation
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// endpoint for the routes grades
app.use('/grades', gradesRouter);

// listing to the port
app.listen(3000, async () => {
  logger.info('API Started!');
});

/*
// function to start reading files to get initial grades from file
async function init() {
  try {
    logger.info('loading files...');

    let data = await readFile(global.FileName, 'utf8');
    let json = JSON.parse(data);

    // save grades in global array
    gradesArray = json.grades;

    //console.log(json.grades);
  } catch (err) {
    logger.error(err);
  }
}
*/
