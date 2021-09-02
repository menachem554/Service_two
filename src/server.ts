import express from 'express';
import morgan from 'morgan';
import studentRouter from './routes/student.router';
import tacherRouter from './routes/tacher.router';

require('dotenv').config();
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api/service/tachers', tacherRouter);
app.use('/api/service/students', studentRouter);

const port = process.env.SERVER_PORT as string;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
