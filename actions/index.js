import { SET_ARTICLE_DETAILS, API, FETCH_ARTICLE_DETAILS } from "./types";
const proxyurl = "http://localhost:81/crud";
export function fetchArticleDetails() {
  return apiAction({
    url: proxyurl+"http://localhost:81/crud",
    onSuccess: setArticleDetails,
    onFailure: () => console.log("Error occured loading Data Details"),
    label: FETCH_ARTICLE_DETAILS
  });
}

function setArticleDetails(data) {
  return {
    type: SET_ARTICLE_DETAILS,
    payload: data
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  mode = 'cors',
  headers = {
                'Access-Control-Allow-Origin':'*'
            },
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = null
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headersOverride
    }
  };
}
