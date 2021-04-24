/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const admin = require("firebase-admin");
const db = admin.firestore();

exports.orderStatusEmailAPI = function(userEmail) {
    const emailContent = "<div style='display: flex;justify-content: center;'>" +
        "<table cellpadding='0' cellspacing='0' style='max-width: 602px;width: 100%;border:1px solid #d5d5d5;border-radius: 9px;'>" +
        "<tr style='background-color: #ffffff;padding:0px 20px;text-align: center;'>" +
        "<td style='padding:15px;text-align: center;' valign='middle'>" +
        "<h3 style='font-size:25px;font-family: sans-serif;margin:25px 0px 20px'>Order Information</h3>" +
        "<p>Srikarthik M placed order #1089 on Mar 09 at 3:41 pm.</p>" +
        "</td>" +
        "</tr>" +
        "<tr style='background-color: #ffffff;padding:0px 20px;text-align: center;'>" +
        "<td style='display: inline-block;max-width:auto;width: 100%;'>" +
        "<div style='display: block;width:100%;height: 1px;background-color: #d5d5d5;margin-bottom: 20px;'></div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='background-color: #ffffff;padding:0px 10px;text-align: center;'>" +
        "<h3 style='font-size:25px;font-family: sans-serif;margin:5px 0px 10px'>Summary</h3>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td valign='top'>" +
        "<table cellpadding='0' cellspacing='0' style='width: 100%;background-color: #ffffff;padding: 20px;border: 0;'>" +
        "<tr style='display: flex;justify-content: center;align-items: center;'>" +
        "<td style='display: inline-block;max-width:70px;width: 100%;text-align: center'>" +
        "<img src='https://images-na.ssl-images-amazon.com/images/I/41xCWDx-OyL.jpg' style='max-width: 108px;width: 100%;border:1px solid #d5d5d5'>" +
        "</td>" +
        "<td style='display: inline-block;max-width:20px;width: 100%'>" +
        "&nbsp;" +
        "</td>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;text-align: center'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>Amrilo Sheesham Wood Queen Size bed in Box Storage</p>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>Rs. 24,000.00 × 1</p>" +
        "</td>" +
        "<td style='display: inline-block;max-width:20px;width: 100%'>" +
        "&nbsp;" +
        "</td>" +
        "<td style='display: inline-block;max-width:100px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>Rs. 24,000.00</p>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:auto;width: 100%;'>" +
        "<div style='display: block;width:100%;height: 1px;background-color: #d5d5d5;margin-bottom: 20px;'></div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>Subtotal</p>" +
        "</td>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;text-align: end;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>Rs. 24,000.00</p>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>Discount</p>" +
        "</td>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;text-align: end;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px'>- Rs. 2,400.00</p>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px;font-weight: bold;'>Total</p>" +
        "</td>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;text-align: end;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px;font-weight: bold;'>Rs. 23,600.00</p>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:auto;width: 100%;'>" +
        "<div style='display: block;width:100%;height: 1px;background-color: #d5d5d5;margin-bottom: 20px;'></div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444;font-weight: bold;'>Payment processing method</p>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px;'>RazorPay</p>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:270px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; font-weight: bold;'>Delivery method </p>" +
        "<p style='margin:0;font-size:16px;color:#444444; margin-bottom:20px;'>Standard</p>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='display: inline-block;max-width:500px;width: 100%;'>" +
        "<p style='margin:0;font-size:16px;color:#444444; font-weight: bold;'>Shipping address </p>" +
        "<p style='margin:0;font-size:16px;color:#444444; '>Srikarthik </p>" +
        "<p style='margin:0;font-size:16px;color:#444444; '>C 209 plot 25&27, Meridian apartments,sector 6,erul </p>" +
        "<p style='margin:0;font-size:16px;color:#444444; '>Navi Mumbai , Maharashtra 400706 </p>" +
        "<p style='margin:0;font-size:16px;color:#444444; '>India </p>" +
        "<p style='margin:0;font-size:16px;color:#444444; '> 70766 07448 </p>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='text-align: center;' valign='top'>" +
        "<table cellpadding='0' cellspacing='0' style='width: 100%;background-color: #ffffff;padding:0px 20px 40px;border: 0;'>" +
        "<tr>" +
        "<td valign='middle'>" +
        "<div style='display: block;width:100%;height: 1px;background-color: #d5d5d5;'></div>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td style='padding:15px;text-align: center;' valign='middle'>" +
        "<img src='https://vintagehomes-dev.web.app/assets/logo.png' alt='logo'>" +
        "</td>" +
        "</tr>" +
        "<tr>" +
        "<td valign='middle' style='text-align: center;'>" +
        "<p style='font-size:14px;color:#444444;font-family: sans-serif;margin:25px 0px 15px'>© Vintage Home | 151 O'Connor Street, Ground floor, Ottawa, ON, K2P 2L8</p>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</div>";
    const sendEmailPromise = db.collection("mail").add({
        to: userEmail,
        message: {
            subject: "Order Placed Successfully",
            html: emailContent,
        },
    });
    return Promise.resolve(sendEmailPromise).then(() => {
            console.log("Order Email Sent Successfully!");
            return 0;
        })
        .catch((error) => {
            console.error("Error in Sending Verification Email: ", error);
        });
};