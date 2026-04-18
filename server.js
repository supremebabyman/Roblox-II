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
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0"
      },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");

    res.status(response.status).send(text);

  } catch (err) {
    console.error("AUTH ERROR:", err);
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