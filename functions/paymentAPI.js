/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable object-curly-spacing */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */

const functions = require("firebase-functions");
const RazorPay = require("razorpay");
const cors = require("cors")({ origin: true });
require("dotenv").config();

const admin = require("firebase-admin");
const db = admin.firestore();

function generateBase64String(string) {
    return Buffer.from(string).toString("base64");
}

exports.payment = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        const Uid = request.body.data.UserUid;

        db.collection("Users").doc(Uid).get().then((doc) => {
            if (doc.exists) {
                const amount = doc.data().CheckoutProductDetails.TotalDisountPriceWithCouponApplied;

                const razorpay = new RazorPay({
                    key_id: "rzp_test_jWOofTDBbQGPFa",
                    key_secret: "N9fWEfNEVnIrmubuMyDhxP4i",
                });

                const options = {
                    amount: parseInt(amount * 100), // amount in the smallest currency unit
                    currency: "INR",
                    receipt: generateBase64String("string"),
                };

                console.log(options);
                razorpay.orders.create(options, function(err, order) {
                    if (err) {
                        const result = { data: err };
                        console.log(err);
                        return response.status(500).send(result);
                    }

                    db.collection("Users").doc(Uid).update({
                        RazorPayOrderDetails: order,
                    });
                    order.key = process.env.KEY || `${functions.config().razorpay.key}`;
                    const result = { data: order };
                    return response.status(200).send(result);
                });
            }
        });
    });
});
