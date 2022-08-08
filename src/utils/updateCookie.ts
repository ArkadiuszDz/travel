const updateCookie = (cookie: string, value: string) => {
  let cookiesArray = cookie.split('&id=').filter(cookie => (cookie !== '' || cookie !== value));

  cookiesArray = [...cookiesArray, value];

  let parsedCookie = '';
  if (cookiesArray.length > 3) {
    parsedCookie = [cookiesArray[1], cookiesArray[2], cookiesArray[3]].join('&id=');
  } else {
    parsedCookie = [...cookiesArray].join('&id=');
  }

  return parsedCookie;
};

export default updateCookie;
