const passport = require('passport');
const productController = require('../Controller/productController');
const Product = require('../models/Product');

module.exports = app => {
  app.get('/api/allProduct',async (req,res) => {
    const data = await productController.getAllProduct();
    console.log(data);
    res.json(data);
  })

  app.post('/api/createProduct',async (req,res) => {
    await productController.createProduct(req,res);
    res.send("done");
  })

  app.get("/api/topPhone",async (req,res) => {
    await productController.topPhone(req,res);
  })

  app.get("/api/topType",async (req,res) => {
    await productController.topType(req,res);
  })
  app.get("/api/countProduct",async (req,res) => {
      var count = await Product.countDocuments();
      res.send("" + count);
  })

  app.post("/api/productType",async (req,res) => {
      await productController.findProductByType(req,res);
  })

  app.post("/api/updateProduct",async (req,res) => {
      await productController.updateProduct(req,res);
  })

  app.get("/api/dataTenDays",async (req,res) => {
      await productController.getDataTenDays(req,res);
  })
};