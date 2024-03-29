const express = require('express');
const path = require('path');
const app = express();
// const productRouter = require('./product/routes');
// const productRouterV2 = require('./product_v2/routes');
// const productRouterV3 = require ('./product_v3/routes');
const log = require('./middlewares/logger');
const router = require('./routes');

app.use(log);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'uploads')));
// app.use('/api/v1', productRouter);
// app.use('/api/v2', productRouterV2);
// app.use('/api/v3', productRouterV3);
app.use(router);
app.use((req, res, next) => {
  res.status(404).send({
    status: 'failed',
    message: 'Resource ' + req.originalUrl + ' Not Found',
  });
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));