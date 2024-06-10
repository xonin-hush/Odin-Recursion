function fibs(n) {
  let array = [];
  let temp1 = 0;
  let temp2 = 1;
  for (let i = 0; i < n; i++) {
    if (n == 0) {
      console.log({ array });
      return;
    } else {
      if (n == 1) {
        array[0] = 0;
      } else if (n >= 2) {
        if (array.length < 2) {
          array.push(temp1);
        }
        array.push(temp2);
        temp2 = array[i] + array[i + 1];
      }
      if (array.length == n) {
        break;
      }
    }
  }
  console.log({ array });
}

fibs(0);
fibs(1);
fibs(2);
fibs(3);
fibs(8);

function fibsRec(num) {
  if (num <= 2) {
    return num;
  } else {
    return fibsRec(num - 1) + fibsRec(num - 2);
  }
}
const nTerms = 5;
if (nTerms <= 0) {
  console.log("no");
} else {
  for (let i = 0; i < nTerms; i++) {
    console.log(fibsRec(i));
  }
}
