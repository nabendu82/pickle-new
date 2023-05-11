export const dateFormate = (timestamp) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let cd = new Date(timestamp * 1000);
  return `${monthNames[cd.getMonth()]} ${cd.getDate()} ${cd.getFullYear()}`;
};
export const ValidateEmail = (email) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  // alert("You have entered an invalid email address!")
  return false;
};

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export const getDataByPage = (data, currentPage, pageSize, postData) => {
  let previousPage = currentPage - 1;
  const slicedData = data.slice(
    previousPage * pageSize,
    previousPage * pageSize + pageSize
  );

  for (let i = 0; i < slicedData.length; i++) {
    postData[slicedData[i].id] = slicedData[i];
  }
  return postData;
};
export const arraytoObject = (data, key) => {
  const dataObject = {};
  data.forEach((element) => {
    // console.log(element[key]);
    if (!dataObject[element[key]]) {
      dataObject[element[key]] = element;
    }
  });
  return dataObject;
};
export const isFutureDate = (date) => {
  var currentTimestamp = Date.now();
  return date * 1000 > currentTimestamp;
};
