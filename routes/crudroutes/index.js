import Router from "express";
import Restaurant from "../../models/restaurant.js";
import Customer from "../../models/customer.js";
import ReservationFields from "../../models/reservationfeilds.js";
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
router.put("/cust/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!customer)
      return res.status(404).send({ message: "customer not found" });
    res.status(200).send(customer);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.delete("/basic/:id", async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.id);
    if (!customer)
      return res.status(404).send({ message: "customer not found" });
    res.status(200).send({ message: "customer deleted succesfully" });
  } catch (error) {
    res.status(500).send({ message: "error deleting customer", error });
  }
});
router.post("/gone", async (req, res) => {
  try {
    const reservationfields = ReservationFields(req.body);
    await reservationfields.save();
    res.send("Table created");
  } catch (error) {
    res.send(error);
  }
});

router.get("/done/resv:id", async (req, res) => {
  try {
    const reservationfields = await ReservationFields.findById(
      requeat.params.id
    );
    res.send(reservationfields);
  } catch (error) {
    res.send(error);
  }
});

router.get("/done", async (req, res) => {
  try {
    const reservationfields = await ReservationFields.find();
    res.send(reservationfields);
  } catch (error) {
    res.send(error);
  }
});
router.post("/gone", async (req, res) => {
  try {
    const reservationfields = ReservationFields(req.body);
    await reservationfields.save();
    res.send("Table created");
  } catch (error) {
    res.send(error);
  }
});

router.get("/done", async (req, res) => {
  try {
    const reservationfields = await ReservationFields.findById(
      requeat.params.id
    );
    res.send(reservationfields);
  } catch (error) {
    res.send(error);
  }
});

router.get("/done", async (req, res) => {
  try {
    const reservationfields = await ReservationFields.find();
    res.send(reservationfields);
  } catch (error) {
    res.send(error);
  }
});

router.put("/reser/:id", async (req, res) => {
  try {
    const reservationfields = await ReservationFields.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!reservationfields)
      return res.status(404).send({ message: "field not found" });
    res.status(200).send(reservationfields);
  } catch (error) {
    res.send("Error: " + error);
  }
});

router.delete("/reserdel/:id", async (req, res) => {
  try {
    const reservationfields = await ReservationFields.findByIdAndDelete(
      req.params.id
    );
    if (!reservationfields)
      return res.status(404).send({ message: "field not found" });
    res.status(200).send({ message: "Field deleted succesfully" });
  } catch (error) {
    res.status(500).send({ message: "error deleting field", error });
  }
});

export default router;
