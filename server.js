const path = require("path");
const express = require("express");
const app = express();

app.use(express.json());

/* =========================
   STATIC FRONTEND
========================= */
app.use(express.static(path.join(__dirname)));

/* =========================
   API ROUTES
========================= */
app.post("/api/auth", async (req, res) => {
  try {
    const response = await fetch("https://now.gg/api/user/v2/auth?locale=en", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(data);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "auth proxy failed" });
  }
});

/* =========================
   START SERVER
========================= */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});