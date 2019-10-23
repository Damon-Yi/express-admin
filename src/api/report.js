import request from "./request";
let basePath = "http://47.56.199.89:3000/";
// basePath = "http://localhost:3000/";

export const getReports = data => {
  return request({
    url: basePath + "report/queryReport",
    method: "post",
    data
  });
};

export const getReportsByDate = data => {
  return request({
    url: basePath + "report/queryReportByDate",
    method: "post",
    data
  });
};

export const deleteReport = data => {
  return request({
    url: basePath + "report/deleteReport",
    method: "post",
    data
  });
};

export const addRemark = data => {
  //添加备注
  return request({
    url: basePath + "report/addRemark",
    method: "post",
    data
  });
};

export const deleteRemark = data => {
  //删除备注
  return request({
    url: basePath + "report/deleteRemark",
    method: "post",
    data
  });
};
