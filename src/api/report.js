import request from "./request";

function getIndexData(data) {
  return request({
    url: "/ccm/index",
    type: "get",
    params: data
  });
}

export { getIndexData }