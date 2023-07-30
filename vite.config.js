import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
    "/foo": "http://localhost:4567",
    // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
    "/api": {
      target:
        "https://7c67-2a00-23c6-c605-d001-f0f5-6ad6-e49f-92cd.ngrok-free.app/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
});
