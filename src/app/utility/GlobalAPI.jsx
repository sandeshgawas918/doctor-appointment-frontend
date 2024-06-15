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

const getDoctors = () => {
  return axiosClient.get("/doctors?populate=*");
};

const getDoctorbyCategory = (category) => {
  return axiosClient.get(
    `/doctors?filters[categories][Name][$in]=${category}&populate=*`
  );
};

const getDoctorbyId = (id) => {
  return axiosClient.get(`/doctors/${id}?populate=*`);
};

const bookAppointment = (data) => {
  return axiosClient.post("/appointments", data);
};

const getAppointments = () => {
  return axiosClient.get(
    "/appointments?populate[doctor][populate][Image][populate][0]=url&populate=*"
  );
};

const deleteAppointment = (id) => {
  return axiosClient.delete(`/appointments/${id}`);
};

const sendEmail=(data)=>{
  return axios.post('/api/send',data)
}

const createDoctor=(data)=>{
  return axiosClient.post('/doctors',data)
}

export default {
  getCategories,
  getDoctors,
  getDoctorbyCategory,
  getDoctorbyId,
  bookAppointment,
  getAppointments,
  deleteAppointment,
  sendEmail,
  createDoctor
};
