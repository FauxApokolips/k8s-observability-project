const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const MSG = process.env.APP_MESSAGE || "Hello from Kubernetes!";

// -------- Prometheus metrics ----------
const client = require("prom-client");
// collect default Node.js & process metrics every 10s
client.collectDefaultMetrics();

// optional: custom counter example
const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["route", "method", "status"]
});

// record metric for root route
app.get("/", (_req, res) => {
  res.json({ ok: true, message: MSG, ts: new Date().toISOString() });
  httpRequests.inc({ route: "/", method: "GET", status: 200 });
});

// metrics endpoint
app.get("/metrics", async (_req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});
// --------------------------------------

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
