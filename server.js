import compression from "compression";
import express from "express";
import morgan from "morgan";

// Short-circuit the type-checking of the built output.
const BUILD_PATH = "./build/server/index.js";
const DEVELOPMENT = process.env.NODE_ENV === "development";
const PORT = Number.parseInt(process.env.PORT || "3000");

const app = express();

app.use(compression());
app.disable("x-powered-by");

if (DEVELOPMENT) {
  console.log("Starting development server");
  const viteDevServer = await import("vite").then((vite) =>
    vite.createServer({
      server: { middlewareMode: true },
    }),
  );
  app.use(viteDevServer.middlewares);
  app.use(async (req, res, next) => {
    try {
      const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      return await source.app(req, res, next);
    } catch (error) {
      if (typeof error === "object" && error instanceof Error) {
        viteDevServer.ssrFixStacktrace(error);
      }
      next(error);
    }
  });
} else {
  console.log("Starting production server");
  app.use(
    "/assets",
    express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
  );
  app.use(morgan("tiny"));
  app.use(express.static("build/client", { maxAge: "1h" }));
  app.use(await import(BUILD_PATH).then((mod) => mod.app));
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






// import compression from "compression";
// import express from "express";
// import morgan from "morgan";
// // Short-circuit the type-checking of the built output.
// const BUILD_PATH = "./build/server/index.js";
// const DEVELOPMENT = process.env.NODE_ENV === "development";
// const PORT = Number.parseInt(process.env.PORT || "3000");
// const app = express();
// app.use(compression());
// app.disable("x-powered-by");
// if (DEVELOPMENT) {
//   console.log("Starting development server");
//   const viteDevServer = await import("vite").then((vite) =>
//     vite.createServer({
//       server: { middlewareMode: true },
//     }),
//   );
//   app.use(viteDevServer.middlewares);
//   app.use(async (req, res, next) => {
//     try {
//       const source = await viteDevServer.ssrLoadModule("./server/app.ts");
      
//       // Get user from your auth middleware or directly
//       // Replace with your actual user extraction logic, e.g., from auth.server
//       const { getUser } = await import("~/services/auth.server"); // Import your function
//       const user = getUser(req) || null; // Get user on server
      
//       // Call the app and get the HTML response
//       const html = await source.app(req, res, next); // Get the rendered HTML
      
//       if (html && typeof html === "string") {
//         // Inject the script with user data
//         const script = `
//           <script>
//             window.__USER__ = ${JSON.stringify(user)};
//           </script>
//         `;
        
//         // Inject before </body>
//         const modifiedHtml = html.replace("</body>", `${script}</body>`);
        
//         res.send(modifiedHtml);
//       } else {
//         next();
//       }
//     } catch (error) {
//       if (typeof error === "object" && error instanceof Error) {
//         viteDevServer.ssrFixStacktrace(error);
//       }
//       next(error);
//     }
//   });
// } else {
//   console.log("Starting production server");
//   app.use(
//     "/assets",
//     express.static("build/client/assets", { immutable: true, maxAge: "1y" }),
//   );
//   app.use(morgan("tiny"));
//   app.use(express.static("build/client", { maxAge: "1h" }));
//   app.use(async (req, res, next) => {
//     const mod = await import(BUILD_PATH);
//     const { app: productionApp, getUser } = mod; // Assume your built app exports getUser

//     // Get user on server
//     const user = getUser(req) || null; // Replace with your logic

//     // Get the rendered HTML from production app
//     const html = await productionApp(req, res, next);

//     if (html && typeof html === "string") {
//       // Inject the script
//       const script = `
//         <script>
//           window.__USER__ = ${JSON.stringify(user)};
//         </script>
//       `;

//       // Inject before </body>
//       const modifiedHtml = html.replace("</body>", `${script}</body>`);

//       res.send(modifiedHtml);
//     } else {
//       next();
//     }
//   });
// }
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });