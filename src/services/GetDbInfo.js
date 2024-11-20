import axios from "axios";

export const dbInfo = async (api, trackNumber = "40106705") => {
  try {
    const res = await axios.get(api + trackNumber, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
