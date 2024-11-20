import axios from "axios";

export const dbInfo = async (api) => {
  try {
    const res = await axios.get(api + "40106705", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
