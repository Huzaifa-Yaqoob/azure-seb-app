module.exports = {
  apps: [
    {
      name: "azure-web-app",
      // Execute the local next binary explicitly via node
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      // Force PM2 to stay in the web root directory context
      cwd: "/home/site/wwwroot", 
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 8080,
      },
    },
  ],
};
