const checkHealth = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'OK' }),
  };
};

export { checkHealth };
