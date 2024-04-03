const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  // baseURL: "https://doctor-strapi-backend.onrender.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    // Authorization: `Bearer 568bc027cd71ebd214b48fc8d51c9865b3d43962d0d145d9bba12ae42816e0b42d50f68c7ef2c28c4ad7db7079efb75a144644c7c075b32f72251aad89ec2ee56556e28e37c4ca4e1c928a703967d1e0acfb12c9c0bf06cf940b4e8e8435411fb493e21c4312502d02c06ff4316fdb4c55c071fa3d53771cc75641e77217e7c5`
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

const getDoctorbyId=(id)=>{
  return axiosClient.get(`/doctors/${id}?populate=*`)
}

export default { getCategories, getDoctors, getDoctorbyCategory,getDoctorbyId };
