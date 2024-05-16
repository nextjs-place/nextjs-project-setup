import { Endpoints } from "./type";

const API_BASE_URL = process.env.NEXT_APP_API_GRAPHQL_ENDPOINT;

const endpoints: Endpoints = {
  login: "/auth/login",
  refreshToken: "/auth/token/refresh",
};

export { endpoints, API_BASE_URL };
