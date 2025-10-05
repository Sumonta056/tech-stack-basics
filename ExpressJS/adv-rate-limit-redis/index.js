import express from "express";
import rateLimit from "express-rate-limit";
import Redis from "ioredis";
import RedisStore from "rate-limit-redis";

const app = express();

// const redisClient = new Redis({
//   host: "redis-10750.c16.us-east-1-3.ec2.redns.redis-cloud.com",
//   port: 10750,
//   username: "default",
//   password: "*******",
//   tls: { rejectUnauthorized: false },
// });
const redisClient = new Redis(
  "redis://default:g3aZKq9U3PXAxxsMJ0iO9DZ6CSIzoayg@redis-10750.c16.us-east-1-3.ec2.redns.redis-cloud.com:10750"
);

redisClient.on("connect", () => console.log("✅ Redis connected"));
redisClient.on("error", (err) => console.error("❌ Redis error:", err));

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.call(...args),
  }),
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: "Too many requests, please try again later.",
  handler: (req, res) => {
    console.warn(`Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({ error: "Too many requests, please wait a minute." });
  },
});

app.use(limiter);
app.get("/", (req, res) => res.send("Hello World"));

const authLimiter = rateLimit({ windowMs: 5 * 60 * 1000, max: 3 });
app.use("/api/login", authLimiter);
app.get("/api/login", (req, res) => res.send("Login Page"));

const apiLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 2 });
app.use("/api/", apiLimiter);
app.get("/api/", (req, res) => res.send("API TESTING"));

app.listen(3000, () => console.log("Server is running on port 3000"));
