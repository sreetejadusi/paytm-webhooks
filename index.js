const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.paytmWebhook = functions.https.onRequest((req, res) => {
    if (req.method === 'POST') {
        const data = req.body; // Assuming Paytm sends data in the request body
        console.log('Data logged successfully:', data);
        res.status(200).send('Data logged successfully');
    } else {
        res.status(400).send('Invalid request method');
    }
});
