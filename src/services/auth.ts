import { SignUpUserType } from "./../pages/Auth/SignUp";
import axios from "axios";
import { baseUrl } from "../config/url";

type LoginUserResponse = {
  access_token: string;
  user: { username: string; name: string };
};

export async function loginUser(user: { username: string; password: string }) {
  try {
    // 👇️ const data: LoginUserResponse
    const { data } = await axios.post<LoginUserResponse>(
      `${baseUrl}/login`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    // console.log(JSON.stringify(data, null, 4));

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

type SignUpUserResponse = {
  _id: string;
  name: string;
  password: string;
  email: string;
  username: string;
};

export async function userSignUp(user: SignUpUserType) {
  try {
    // 👇️ const data: LoginUserResponse
    const { data } = await axios.post<SignUpUserResponse>(
      `${baseUrl}/user`,
      user,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      // 👇️ error: AxiosError<any, any>
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
