/**
 * Import function triggers from their respective submodules
 */
import { onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import * as admin from "firebase-admin";

// Initialize Firebase Admin SDK
admin.initializeApp();

// Simple health check endpoint
export const healthCheck = onCall((_data, _context) => {
  logger.info("Health check called", { structuredData: true });

  return {
    status: "ok",
    timestamp: new Date().toISOString(),
    message: "Jiu-Jitsu Submission Tracker API is running",
  };
});
