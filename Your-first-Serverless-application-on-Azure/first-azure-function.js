module.exports = function (context, req) {
    context.log('HTTP trigger function is processing an incoming request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            status: 200,
            body: "Hello World!" + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please provide a name within the query string or in the request body"
        };
    }
    context.done();
};