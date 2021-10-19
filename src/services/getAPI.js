const axios = require("axios");

const GetAPI = {
  createDiagnostic: async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/diagnostic",
        data
      );
      return response;
    } catch (error) {
     
    }
  },
  createCustomer: async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:8080/customers",
            data
          );
      if (response.status === 201) {
        return "compte creer";
      }
    } catch (error) {
      return "compte deja creer";
    }
  },
  Login: async (data)=>{
      try{
          const response = await axios.post("http://localhost:8080/login",
          data)
         
          return response
      }catch(error){
         
      }
  }
};

export default GetAPI;
