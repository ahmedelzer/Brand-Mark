function cleanString(s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      if (res[res.length - 1] !== "") {
        res = res.slice(0, res.length - 1);
      }
    } else {
      res += s[i];
    }
  }
  return res;
}

// Example usage:
console.log(cleanString("abc####d##c##d##c"));

// logRange("1234512345"); // Log numbers from 1 to 5
// console.log(missing("899091939495"));
