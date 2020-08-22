interface errorStatus {
  status: Number
}

const validateError = (error: errorStatus) => {
  switch (error.status) {
    case 403:
      return { errorMessage: 'Invalid Ranking ID' };
    case 404:
      return { errorMessage: 'No Ranking ID found' };
    case 500:
      return { errorMessage: 'Internal Error' };
    case 503:
      return { errorMessage: 'Connection Issue with the API' }
    default:
      return { errorMessage: 'ID is out of the range, please give another try' };
  }
}

export default validateError;