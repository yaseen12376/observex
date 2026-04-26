import express from "express";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

type DemoBookingInput = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  location?: unknown;
  propertyType?: unknown;
};

type DemoBookingData = {
  name: string;
  email: string;
  phone: string;
  location: string;
  propertyType: string;
};

type DemoBookingRecord = DemoBookingData & {
  id: string;
  submittedAt: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+()\-.\s]{7,20}$/;
const DATA_DIR = path.resolve(__dirname, "data");
const BOOKINGS_FILE = path.join(DATA_DIR, "demo-bookings.ndjson");

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

function validateDemoBooking(payload: DemoBookingInput): {
  data: DemoBookingData;
  errors: string[];
} {
  const data: DemoBookingData = {
    name: sanitizeText(payload.name, 80),
    email: sanitizeText(payload.email, 120),
    phone: sanitizeText(payload.phone, 30),
    location: sanitizeText(payload.location, 80),
    propertyType: sanitizeText(payload.propertyType, 40),
  };

  const errors: string[] = [];

  if (!data.name) {
    errors.push("Name is required.");
  }

  if (!data.email) {
    errors.push("Email is required.");
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.push("Email is invalid.");
  }

  if (!data.phone) {
    errors.push("Phone number is required.");
  } else if (!PHONE_REGEX.test(data.phone)) {
    errors.push("Phone number is invalid.");
  }

  if (!data.location) {
    errors.push("Location is required.");
  }

  if (!data.propertyType) {
    errors.push("Property type is required.");
  }

  return { data, errors };
}

async function persistBooking(record: DemoBookingRecord): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.appendFile(BOOKINGS_FILE, `${JSON.stringify(record)}\n`, "utf8");
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json({ limit: "100kb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/demo-bookings", async (req, res) => {
    const { data, errors } = validateDemoBooking((req.body ?? {}) as DemoBookingInput);

    if (errors.length > 0) {
      res.status(400).json({
        success: false,
        message: "Invalid booking payload.",
        errors,
      });
      return;
    }

    const record: DemoBookingRecord = {
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
      ...data,
    };

    try {
      await persistBooking(record);
      res.status(201).json({
        success: true,
        message: "Demo booking received.",
      });
      return;
    } catch (error) {
      console.error("Failed to persist demo booking", error);
      res.status(500).json({
        success: false,
        message: "Unable to save booking right now.",
      });
      return;
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
