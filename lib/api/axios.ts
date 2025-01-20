import axios from 'axios';  
  
const axiosInterceptorInstance = axios.create({
  baseURL: process.env.API_URL,
});  
  
// Request interceptor  
axiosInterceptorInstance.interceptors.request.use(  
  async (config) => {  

    const accessToken = await generateToken();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;  
  },  
  (error) => {  
    // Handle request errors here  
    return Promise.reject(error);  
  }  
);  
  
// Response interceptor  
axiosInterceptorInstance.interceptors.response.use(  
  (response) => {  
    // Modify the response data here  
    return response;  
  },  
  (error) => {  
    // Handle response errors here  
    return Promise.reject(error);  
  }  
);  

const generateToken = async () => {
  const res = await axios.post(process.env.API_URL + "/api/auth/guard-user-signin", {
    username: '!mlaerehtfonaidrugmaiyeh',
    password: '2f8b199acf752364c0d9f7d893ac8e664'
  });

  return res.data.data.accessToken;
};
  
export default axiosInterceptorInstance;