// server.js
import express from 'express';
import cors from 'cors';
import http from 'http';
import { ExpressPeerServer } from 'peer';

const app = express();

// Hard-coded configuration
const PORT = 9000;
const LOCAL_IP = '172.17.29.90'; // Bind to all network interfaces

// Configure CORS
app.use(cors());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Create the HTTP server
const server = http.createServer(app);

// Initialize the PeerServer
const peerServer = ExpressPeerServer(server, {
  debug: true,
  allow_discovery: true,
});

// Mount the PeerServer at the "/myapp" path
app.use("/myapp", peerServer);

// Start the server
server.listen(PORT, LOCAL_IP, () => {
  console.log(`Server running at http://172.17.29.90:${PORT}`);
});
