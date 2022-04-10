const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware("http://stickies-wall-by-chris.herokuapp.com//note", {target: 'http://localhost:4000'}));
    app.use(createProxyMiddleware("http://stickies-wall-by-chris.herokuapp.com//note/:id", {target: 'http://localhost:4000'}))
}

//react-scripts start 