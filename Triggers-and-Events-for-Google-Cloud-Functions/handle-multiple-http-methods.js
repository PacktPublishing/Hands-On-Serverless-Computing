function handleGET(req, res) {
    res.status(200).send('Hello from HTTP Google Cloud Function!');
}

function handlePUT(req, res) {
    res.status(403).send("Forbidden, you don't have access");
}

exports.helloHttpFunction = (req, res) => {
    switch (req.method) {
        case 'POST':
            handlePOSTMethod(req, res);
            break;
        case 'PUT':
            handlePUTMethod(req, res);
            break;
        case 'PUT':
            handleGETMethod(req, res);
            break;
        default:
            res.status(500).send({
                error: 'Something went wrong in the function!'
            });
            break;
    }
};