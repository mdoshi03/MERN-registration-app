module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  const Joi = require("joi");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);

  // router.post("/", (req, res, next) => {
  //   const Joi = require("joi");

  //   const data = req.body;
  //   console.log(data);
  //   const schema = Joi.object({
  //     firstName: Joi.string(),
  //     lastName: Joi.string(),
  //     email: Joi.string().email().required(),
  //     password: Joi.string(),
  //   });

  //   schema.validate(data, (err, value) => {
  //     if (err) {
  //       res.status(422).json({
  //         status: "error",
  //         message: "Invalid request data",
  //         data: data,
  //       });
  //     } else {
  //       res.json({
  //         status: "success",
  //         message: "User created successfully",
  //         data: Object.assign({ id }, value),
  //       });
  //     }
  //   });
  // });
  // app.post('/test', (req, res, next) => {
  //   // ...

  //   Joi.validate(data, schema, (err, value) => {
  //     const id = Math.ceil(Math.random() * 9999999);

  //     if (err) {
  //       res.status(422).json({
  //         status: 'error',
  //         message: 'Invalid request data',
  //         data: data
  //       });
  //     } else {
  //       res.json({
  //         status: 'success',
  //         message: 'User created successfully',
  //         data: Object.assign({id}, value)
  //       });
  //     }
  //   });
  // });

  // Retrieve all Tutorials
  router.get("/", users.findAll);

  // Retrieve all published Tutorials
  // router.get("/published", users.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", users.findOne);

  // Update a Tutorial with id
  router.put("/:id", users.update);

  // Delete a Tutorial with id
  router.delete("/:id", users.delete);

  // Delete all Tutorials
  router.delete("/", users.deleteAll);

  app.use("/api/users", router);
};
