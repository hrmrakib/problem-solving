function repeatString(str, n = 1) {
  let rep = [];
  for (let i = 1; i <= n; i++) {
    rep.push(str);
  }
  rep = rep.toString();
  // x = rep.split(",");
  // x.join(" ");
  return rep;
}

const magi = repeatString("I hate you", 3);
console.log(magi);
