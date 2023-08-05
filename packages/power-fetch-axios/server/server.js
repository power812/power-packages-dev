import express from 'express';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';
const app = express();
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

// var csrfProtection = csrf({ cookie: true });
const router = express.Router();
// 使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

router.get('/api', function (req, res) {
  // console.log('headers', req);
  res.json({
    headers: req.headers,
    param: req.query,
    msg: '请求成功',
  });
});
router.post('/api', function (req, res) {
  res.json({
    data: req.body,
    msg: '请求成功',
  });
});

// 取消请求
router.get('/api/cancel', function (req, res) {
  setTimeout(() => {
    // console.log(1);
    res.json({
      msg: `hello world`,
    });
  }, 3000);
});
// cors请求
const cors = {
  'Access-Control-Allow-Origin': 'http://localhost:8000',
  'Access-Control-Allow-Credentials': true,
  'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

router.post('/api/addWithCredentials', function (req, res) {
  console.log(req.cookies);
  res.set(cors);
  res.json(req.cookies);
});
router.options('/api/addWithCredentials', function (req, res) {
  res.set(cors);
  res.end();
});

// 防御XSRF
router.options('/api/defendXSRF', function (req, res) {
  console.log(req.headers);
  res.set(cors);
  console.log(res.headers, 'res');

  res.end();
});
router.get('/api/defendXSRF', function (req, res) {
  console.log(req.headers, 2);
  res.set(cors);
  res.cookie('hello', '123');
  res.json(req.headers);
});

// 文件下载
const __filename = router.get('/api/downloadFile', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../a.png'));
});
app.use(router);

const port = process.env.PORT || 3000;
const lister = app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
export default lister;
