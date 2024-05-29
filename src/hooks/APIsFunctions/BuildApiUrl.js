import { baseURL } from "../../../request";

export function BuildApiUrl(apiRequest, constants) {
  if (!apiRequest || !apiRequest.dashboardFormSchemaActionQueryParams) {
    // Handle the case where apiRequest is null or does not have dashboardFormSchemaActionQueryParams
    return null; // or some default value or throw an error, depending on your use case
  }

  const queryParam = apiRequest.dashboardFormSchemaActionQueryParams
    .map(
      (param) =>
        `${param.parameterName}=${constants[param.dashboardFormParameterField]}`
    )
    .join("&");

  const apiUrl = `${baseURL}/${apiRequest.routeAdderss}?${queryParam}`;
  console.log(apiUrl);
  return apiUrl;
}
