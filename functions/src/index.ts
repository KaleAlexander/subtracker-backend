// In your functions/src/index.ts file
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

admin.initializeApp();

// HTTP function for health check
export const healthCheck = onRequest((request, response) => {
  logger.info("Health check called", { structuredData: true });

  // Set CORS headers
  response.set("Access-Control-Allow-Origin", "*");
  response.set("Access-Control-Allow-Methods", "GET, POST");
  response.set("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight requests
  if (request.method === "OPTIONS") {
    response.status(204).send("");
    return;
  }

  // Return health check response
  response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "Jiu-Jitsu Submission Tracker API is running",
  });
});
