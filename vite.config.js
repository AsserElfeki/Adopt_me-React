import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    root: "src",
});

//vite is the BUILD TOOL
//Our end result that we want from a build tool is that
// * We can separate files out for code organization and have a tool stitch them together for us
// * We can include external, third - party libraries from npm(like React!)
// * The tool will optimize the code for us by minifying and other optimizing techniques
// other tools exist, like Webpack and Parcel