import {
  GetProjectUrl,
  languageID,
  languageName,
  SetHeaders,
  token,
} from "../../request";
export default async function APIHandling(url, methodType, sendBody, query) {
  var myHeaders = new Headers();
  let urlRoute = GetProjectUrl() + "/" + url;
  if (methodType == "Get") {
    urlRoute = query;
  }
  for (const [key, value] of Object.entries(SetHeaders())) {
    myHeaders.append(key, value);
  }

  // myHeaders.append("languageName", "ARABIC");
  var raw = JSON.stringify(sendBody);

  var requestOptions = {
    method: methodType,
    headers: myHeaders,
    // body: raw,
    redirect: "follow",
  };
  if (methodType !== "Get") requestOptions = { ...requestOptions, body: raw };
  console.log(requestOptions);
  try {
    const response = await fetch(urlRoute, requestOptions);
    const result = await response.json();

    // Check if the API call was successful based on the HTTP status code
    if (response.ok) {
      const successResponse = {
        success: true,
        data: result,
      };
      return successResponse;
    } else {
      const errorResponse = {
        success: false,
        error: result, // You can customize this based on your API response structure
      };
      if (result.code === 401) {
        //todo handle error message
        // RedirectToLogin(navigate, result);
        return;
      }
      return errorResponse;
    }
  } catch (error) {
    // If there's an exception, return an error response
    const exceptionResponse = {
      success: false,
      error: error,
    };
    return exceptionResponse;
  }
}
