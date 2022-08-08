const getCookie = (cname: string) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  let cookie = '';
  const caLength = ca.length
    for(let i = 0; i < caLength; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
      cookie = c.substring(name.length, c.length);
      }
    }
    return cookie;
  }

  export default getCookie;
