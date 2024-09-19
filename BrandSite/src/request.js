import axios from "axios";
export const baseURL = "http://maingatewayapi.ihs-solutions.com:8000/";
export const defaultProjectProxyRoute =
  "http://maingatewayapi.ihs-solutions.com:8000/BrandingMart/api/";
export const defaultProjectProxyRouteWithoutAPI =
  "http://maingatewayapi.ihs-solutions.com:8000/BrandingMart/";

export const request = axios.create({
  baseURL: baseURL,
  headers: {
    // languageName: lan,
  },
});
