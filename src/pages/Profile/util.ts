import { message } from "antd";
import { Api } from "../../services/api";

export async function getUserDataRequest() {
  try {
    const request = await Api.get("user/info");

    return request.data;
  } catch (error) {
    message.error("Erro ao realizar requisição!");
    return null;
  }
}
