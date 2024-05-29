import axios from "axios";
export const baseURL = "http://hum.ddnsking.com:8002";
export const defaultProjectProxyRoute =
  "http://hum.ddnsking.com:8002/BrandingMart/api/";
export const defaultProjectProxyRouteWithoutAPI =
  "http://hum.ddnsking.com:8002/BrandingMart/";
export const request = axios.create({
  baseURL: baseURL,
  headers: {
    // languageName: lan,
  },
});
