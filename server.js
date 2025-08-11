// server.js — Bangladesh Finance Capital (bfcl.bd.finance)
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = '0.0.0.0';            // bind to all interfaces for NGINX proxy
const port = Number(process.env.PORT) || 3002; // <- DIFFERENT PORT

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

async function start() {
  await app.prepare();

  const server = createServer(async (req, res) => {
    try {
      // simple health probe
      if (req.url === '/healthz') {
        res.statusCode = 200;
        res.end('ok');
        return;
      }

      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error handling request:', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  });

  server.once('error', (err) => {
    console.error('Server error:', err);
    process.exit(1);
  });

  server.listen(port, hostname, () => {
    console.log(`✅ BFCL Next.js app running on http://${hostname}:${port}`);
  });

  // graceful shutdown for PM2/systemd
  const shutdown = (signal) => () => {
    console.log(`\n${signal} received. Shutting down...`);
    server.close(() => {
      process.exit(0);
    });
    // force exit if not closed in time
    setTimeout(() => process.exit(0), 5000).unref();
  };
  process.on('SIGINT', shutdown('SIGINT'));
  process.on('SIGTERM', shutdown('SIGTERM'));
}

start();
