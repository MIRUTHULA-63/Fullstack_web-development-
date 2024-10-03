import Router from "express";
import Restaurant from "../../models/restaurant.js";
import Customer from "../../models/customer.js";
const router = Router();
router.post("/goes", async (req, res) => {
  try {
    const restaurant = Restaurant(req.body);
    await restaurant.save();
    res.send("Table created");
  } catch (error) {
    res.send(error);
  }
});

router.get("/does/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(request.params.id);
    res.send(restaurant);
  } catch (error) {
    res.send(error);
  }
});

router.get("/does", async (req, res) => {
  try {
    const restaurant = await Restaurant.find();
    res.send(restaurant);
  } catch (error) {
    res.send(error);
  }
});
router.post("/go", async (req, res) => {
  try {
    const customer = Customer(req.body);
    await customer.save();
    res.send("Table created");
  } catch (error) {
    res.send(error);
  }
});

router.get("/ok/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(request.params.id);
    res.send(customer);
  } catch (error) {
    res.send(error);
  }
});

router.get("/ok", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.send(customer);
  } catch (error) {
    res.send(error);
  }
});
export default router;
