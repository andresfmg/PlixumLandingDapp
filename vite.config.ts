import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// Copia dist/index.html a dist/<ruta>/index.html para rutas de React Router que se
// comparten como links directos (SAGRILAFT, privacidad, términos). S3 (origen de Amplify Hosting)
// redirige "/ruta" -> "/ruta/" cuando detecta un objeto bajo ese prefijo, y ese 301 no
// pasa por la regla de fallback SPA (404-200) de Amplify -- resultado: 404 real en carga
// directa aunque la ruta exista en el router. Al generar un objeto real en "<ruta>/index.html"
// para las rutas conocidas, S3 lo sirve directo sin depender de esa regla.
function deepLinkFallbackPlugin(routes: string[]): Plugin {
  return {
    name: "deep-link-fallback",
    closeBundle() {
      const outDir = path.resolve(__dirname, "dist");
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      const html = fs.readFileSync(indexPath, "utf-8");
      for (const route of routes) {
        const dir = path.join(outDir, route.replace(/^\//, ""));
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), html);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/bridge': {
        target: 'https://api.nebulack.com/plixum',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.removeHeader('origin');
            proxyReq.removeHeader('referer');
          });
        },
      },
      '/api/contactregistrations': {
        target: 'https://api.nebulack.com/plixum',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.removeHeader('origin');
            proxyReq.removeHeader('referer');
          });
        },
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode !== "development" && deepLinkFallbackPlugin(["/privacy", "/terms-of-service", "/policy-sagrilaft"]),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
