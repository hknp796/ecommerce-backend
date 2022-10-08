import Razorpay from "razorpay";
// const payment = express.Router();
import "dotenv/config";
const razorpay = new Razorpay({
  key_id: "rzp_live_UZZjgMhuA7745v",
  key_secret: "ACj5MMeDxoRq5xntaI6cWX2P",
});

const paymentCheck = async (req, res) => {
  try {
    const generateOrder = async (amount, currency) => {
      console.log(amount, currency);
      const order = await razorpay.orders.create({
        amount: amount,
        currency: currency,
        receipt: "order_rcptid_11",
      });

      return order;
    };

    // const amount = `Your random payment amount`;
    const orders = await generateOrder(10000, "INR");
    console.log(orders);
    res.status(200).send(orders);
  } catch (error) {
    return res.status(500).json("error payment");
  }
};
export { paymentCheck };
