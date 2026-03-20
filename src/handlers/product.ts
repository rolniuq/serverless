import { APIGatewayProxyEvent } from 'aws-lambda';

const getProduct = (event: APIGatewayProxyEvent) => {
  const productId = event.pathParameters?.id;
  if (!productId) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Product ID is required' }),
    };
  }

  const product = { id: productId, name: 'Sample Product', price: 19.99 };

  return {
    statusCode: 200,
    body: JSON.stringify(product),
  };
};

const createProduct = (event: APIGatewayProxyEvent) => {
  const body = JSON.parse(event.body || '{}');
  const { name, price } = body;

  if (!name || price === undefined) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Product name and price are required' }),
    };
  }

  const newProduct = { id: '456', name: name, price: price };

  return {
    statusCode: 201,
    body: JSON.stringify(newProduct),
  };
};

export { getProduct, createProduct };
