exports.helloWorldHttp = (req, res) => {
  if (req.body.message === undefined) {
    res.status(400).send('No message defined in the request body!');
  } else {
    console.log(req.body.message);
    res.status(200).send('Hello World!, ' + req.body.message);
  }
};