import Razorpay from "razorpay";
import "dotenv/config";
import crypto from "crypto";

let order_id;
const createOrder = async (req, res) => {
  console.log(req.body);
  try {
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    instance.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .json({ message: "Something went wrong", status: "Failed" });
      }
      order_id = order.id;
      res.status(200).json(order);
      console.log(order, "order");
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const verifyPayment = async (req, res) => {
  console.log(req.body, "verify");
  try {
    const { razorpay_payment_id, razorpay_signature } = req.body;

    const sign = order_id + "|" + razorpay_payment_id;

    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      return res.status(201).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid signature sent!" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
export { createOrder, verifyPayment };
