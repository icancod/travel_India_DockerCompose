import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "travel-india-backend",
    message: "Explore India API is running"
  });
});

app.get("/api", (_req, res) => {
  res.json({
    name: "Explore India API",
    endpoints: ["/api/health"]
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Travel India API listening on port ${PORT}`);
});
