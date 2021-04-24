/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
const admin = require("firebase-admin");


const db = admin.firestore();

exports.userWelcomeEmailApi = function(userEmail) {
    const emailContent = "<div style='display: flex; justify-content: center;'>" +
        "<table cellpadding='0' cellspacing='0' style='max-width: 602px;width: 100%;border:1px solid #d5d5d5;border-radius: 9px;'>" +
        "<tr style='background-color: #ffffff;padding:0px 20px;text-align: center;'>" +
        "<td style='padding:15px;text-align: center;' valign='middle'>" +
        "<h3 style='font-size:25px;font-family: sans-serif;margin:25px 0px 20px'>Welcome to Vintage Home</h3>" +
        "<p>Keep checking our latest collection.</p>" +
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
        "<a href=''>" +
        "<img src='https://vintagehomes-dev.web.app/assets/logo.png' alt='logo'>" +
        "</a>" +
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
            subject: "Welcome to vintage home",
            html: emailContent,
        },
    });
    return Promise.resolve(sendEmailPromise).then(() => {
            console.log("Verification Email Sent Successfully!");
            return 0;
        })
        .catch((error) => {
            console.error("Error in Sending Verification Email: ", error);
        });
};