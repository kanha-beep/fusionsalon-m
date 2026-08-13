import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);
app.use(express.json());

app.get("/api/health", (_request, response) => {
  response.json({ ok: true, message: "Fusion salon server is running." });
});

app.post("/api/contact", (request, response) => {
  const { name, phone, service, message } = request.body;

  if (!name || !phone || !message) {
    return response.status(400).json({
      ok: false,
      message: "Name, phone, and message are required."
    });
  }

  const enquiry = {
    name,
    phone,
    service: service || "General enquiry",
    message,
    receivedAt: new Date().toISOString()
  };

  console.log("New salon enquiry:", enquiry);

  return response.status(201).json({
    ok: true,
    message: "Enquiry received successfully."
  });
});

app.listen(PORT, () => {
  console.log(`Fusion salon server running on http://localhost:${PORT}`);
});
