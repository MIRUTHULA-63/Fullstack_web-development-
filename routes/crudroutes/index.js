import Router from "express";
import Restaurant from "../../models/restaurant.js";
const router = Router();
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
  export default router;