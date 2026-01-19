export const mfConfig = {
  name: "Products",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    home: "home@http://localhost:3000/remoteEntry.js",
  },
  filename: "remoteEntry.js",
};
