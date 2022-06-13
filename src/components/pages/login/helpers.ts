import { httpClient } from "../../../utils";
import { LoginResponse } from "./types";

export const login = async (
  phoneNumber: string,
  password: string
): Promise<LoginResponse> => {
  console.log(phoneNumber);
  try {
    const result = await httpClient.post("/users/login", {
      phoneNumber,
      password,
    });

    return result.data;
  } catch (err: any) {
    throw err;
  }
};
