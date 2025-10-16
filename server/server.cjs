// server.js
const express = require("express");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Make sure this file is in the same folder

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com" // Replace with your Firebase Realtime DB URL
});

const app = express();
app.use(express.json());

// Test route to check server
app.get("/", (req, res) => {
  res.send("Firebase server is running!");
});

// Signup route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({ email, password });
    res.status(201).json({ uid: userRecord.uid, email: userRecord.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Firebase Admin SDK cannot verify password directly.
    // For login with password, you usually use Firebase Client SDK on frontend.
    res.status(200).json({ message: "Use Firebase client SDK for login with password." });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
