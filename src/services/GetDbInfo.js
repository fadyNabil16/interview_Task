import axios from "axios";

export const dbInfo = async (api) => {
  try {
    const res = await axios.get(api + "84043113", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
