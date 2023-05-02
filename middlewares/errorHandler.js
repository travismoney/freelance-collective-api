function errorHandler(res, error) {
  let errorStatus = 500;
  let errorMessage = 'Internal Server Error';
  let errorDesc = 'There is something wrong with the server. Please try again later.'
  let errorObj = null;
  if (error.name === 'MongoError' && error.code === 11000) {
    errorStatus = 422;
    errorMessage = 'Duplicate Fields';
    const field = Object.keys(error.keyValue)[0];
    const value = error.keyValue[field];
    errorDesc = `There is already a record with ${field}, ${value} in the database`;
    errorObj = {
      keyValue: error.keyValue
    };
  }
  res.status(errorStatus).json({
    statusCode: errorStatus,
    message: errorMessage,
    description: errorDesc,
    error: errorObj
  });
}

module.exports = { errorHandler }