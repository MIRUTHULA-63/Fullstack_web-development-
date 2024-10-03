import mongoose from "mongoose";
const reservationfieldsSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  reservationDate: {
    type: String,
    required: true,
  },
  reservationTime: {
    type: String,
    required: true,
  },
  reservationStatus: {
    type: String,
    require: true,
  },
});

const ReservationFields = mongoose.model(
  "ReservationFields",
  reservationfieldsSchema
);
export default ReservationFields;

