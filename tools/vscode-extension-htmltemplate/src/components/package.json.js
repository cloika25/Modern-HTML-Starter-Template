export default `
{
  "name": "htmltemplate",
  "version": "0.1.0",
  "main": "server.js",
  "license": "MIT",
  "private": true,
  "scripts": {
    "start": "node server.js",
    "dev": "open-cli http://localhost:1234 && nodemon server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "helmet": "^4.2.0",
    "prerender-node": "^3.2.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.6",
    "open-cli": "^6.0.1"
  }
}
`
