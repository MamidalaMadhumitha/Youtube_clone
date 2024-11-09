// created a function for showing the success message 

export const successResponse = (message, key, data = null) => {
    const response = {
      success: true,
      message: message,
    };
  
    if (data !== null) {
      response[key] = data;
    }
  
    return response;
  };