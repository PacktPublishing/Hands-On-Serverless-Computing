console.log('Loading function');
exports.handler = async (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    const name = JSON.parse(event.body).name;
    const helloWorldMsg = `Hello World!, ${name}`;
    const resp = {
        statusCode: 200,
        body: JSON.stringify(helloWorldMsg),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    console.log(helloWorldMsg);
    return resp;
};