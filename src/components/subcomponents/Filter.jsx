import { datas } from "../../util/data";

export function getData() {
  const dataList = datas;
  return dataList;
}

export function filterData(dataType) {
  let filtredData = getData().filter((type) => type.category === dataType);
  return filtredData;
}
