import express from 'express';
import bodyParser from 'body-parser';
import apiRoute from './routes/index';


const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/v1', apiRoute);
app.get('/', (req, res) => {
  res.status(200).json({ message: "Welcome Taylor App Backend" })
});

app.listen(port, () => console.log(`Application runing on port ${port}`));