import { APIGatewayProxyEvent } from 'aws-lambda';

const getUser = async (event: APIGatewayProxyEvent) => {
  const userId = event.pathParameters?.id;
  if (!userId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'User ID is required' }),
    };
  }

  const user = { id: userId, name: 'John Doe' };

  return {
    statusCode: 200,
    body: JSON.stringify(user),
  };
};

const createUser = async (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || '{}');
  const { name } = body;

  if (!name) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'User name is required' }),
    };
  }

  const newUser = { id: '123', name: name };

  return {
    statusCode: 201,
    body: JSON.stringify(newUser),
  };
};

export { getUser, createUser };
