function doubles(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (res === "" || s[i] !== res[res.length - 1]) {
      res += s[i];
    } else {
      console.log(s[i]);
      res.split("").pop();
      //   res -= s[i];
    }
  }

  return res;
}

console.log(doubles("rrrmooomqqqqj"));
