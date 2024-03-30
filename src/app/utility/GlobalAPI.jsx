const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  // baseURL: "http://localhost:1337/api",
  baseURL: "https://doctor-strapi-backend.onrender.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategories = () => {
  return axiosClient.get("/categories?populate=*");
};

const getDoctors=()=>{
  return axiosClient.get('/doctors?populate=*')
}

const getDoctorbyCategory=(category)=>{
  return axiosClient.get(`/doctors?filters[categories][Name][$in]=${category}&populate=*`)
}

export default { getCategories, getDoctors, getDoctorbyCategory };
