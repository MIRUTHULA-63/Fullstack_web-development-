import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema({
  tablename: {
    type: Number,
    required: true,
  },
  seatingCapacity: {
    type: Number,
  },
  isAvailable: {
    type: Boolean,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
export default Restaurant;
