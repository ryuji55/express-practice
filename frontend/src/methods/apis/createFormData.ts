import { submitFormDataUrl } from "./../../constants/url";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
};

const createFormData = (data: FormData): void => {
  axios
    .post(submitFormDataUrl, data, { withCredentials: true })
    .then((res) => {
      console.log("registration res", res);
    })
    .catch((err) => {
      console.error("registration error", err);
    });
};

export default createFormData;
