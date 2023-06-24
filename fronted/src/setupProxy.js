const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware(['/api/jobs', '/api/user','/api/application'],{
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
};

