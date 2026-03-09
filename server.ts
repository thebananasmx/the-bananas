import express from "express";
import { createServer as createViteServer } from "vite";
import subscribeHandler from "./api/subscribe.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for form submission (usando el mismo handler que Vercel)
  app.post("/api/subscribe", async (req, res) => {
    // Adaptamos el req/res de Express al formato que espera el handler de Vercel
    return subscribeHandler(req as any, res as any);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("index.html", { root: "dist" });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
