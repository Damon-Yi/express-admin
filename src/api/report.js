import request from "./request";

export const getReports = data => {
  return request({
    url: "http://47.56.199.89:3000/report/queryReport",
    method: "post",
    data
  });
};

export const getReportsByDate = data => {
  return request({
    url: "http://47.56.199.89:3000/report/queryReportByDate",
    method: "post",
    data
  });
};
