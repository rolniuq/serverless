exports.handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" }),
  };
};

exports.handler2 = async (event) => {
  // cause event.body is a string
  const body = JSON.parse(event.body);
  console.log("Received body: ", body);

  return {
    statusCode: 200,
    body: event.body,
  };
};
