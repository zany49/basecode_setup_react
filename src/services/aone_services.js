import AoneService from "./axiosbase";

const url = process.env.REACT_APP_BASE_URL





export const getDummy = async () => {
console.log("url---->",url)
    try {
      return await AoneService.get();
    } catch (error) {
      return error;
    }
  };