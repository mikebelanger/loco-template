import { defineConfig } from "@rsbuild/core";
import { pluginYaml } from "@rsbuild/plugin-yaml";
import { pluginSass } from "@rsbuild/plugin-sass";

// https://rsbuild.dev/guide/basic/configure-rsbuild
export default defineConfig({
    plugins: [pluginYaml(), pluginSass()],
    html: {
        template: "./src/index.html",
        inject: "body",
        scriptLoading: "module",
    },
    output: {
        copy: [
            // `./src/assets/image.png` -> `./dist/image.png`
            { from: "./src/index.css", to: "./static/css/index.css" },
        ],
        inlineStyles: true,
    },
    server: {
        proxy: {
            "/api": {
                target: "http://127.0.0.1:5150",
                changeOrigin: true,
                secure: false,
            },
        },
    },
});
