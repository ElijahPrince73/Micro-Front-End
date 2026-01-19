export const mfConfig = {
  name: "Home",
  filename: "remoteEntry.js",
  exposes: {
    "./Header": "./src/Header",
    "./Footer": "./src/Footer",
  },
  shared: ["react", "react-dom"],
};
