const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '20mb' , extended: true }));
app.use(cors());


router.get('/', (req,res)=>{
    res.json({ ok:true })
});

app.use('/', router);

app.listen(port);
