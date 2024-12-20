let numberArr = [2, -5, 6, -8];
let numberArr2 = [1, 6, 6.8, 9.23];
// document.getElementById("result-number").innerText = numberArr;
// numberArr.forEach((item) => {
//   console.log("item:", item);
// });
// let numberArr = [];

let getDataForm = () => {
  if (document.getElementById("number").value == "") {
    return;
  }
  let number = document.getElementById("number").value * 1;
  numberArr.push(number);
  //   console.log("numberArr", numberArr);
  document.getElementById("number").value = "";
  document.getElementById("result-number").innerHTML = numberArr;
};
let getDataForm2 = () => {
  if (document.getElementById("number4").value == "") {
    return;
  }
  let number = document.getElementById("number4").value * 1;
  numberArr.push(number);
  //   console.log("numberArr", numberArr);
  document.getElementById("number4").value = "";
  document.getElementById("soThuc").innerHTML = numberArr2;
};
let countPositive = () => {
  let countPositive = 0;
  for (let i = 0; i < numberArr.length; i++) {
    let value = numberArr[i];
    if (value > 0) {
      countPositive++;
    }
  }
  document.getElementById(
    "result-count-positive"
  ).innerHTML = `số lượng số dương là:${countPositive}`;
};
let sumPositive = () => {
  let sumPositive = 0;
  for (let i = 0; i < numberArr.length; i++) {
    let value = numberArr[i];
    if (value > 0) {
      sumPositive += value;
    }
  }
  document.getElementById(
    "result-sum-positive"
  ).innerHTML = `tổng số dương là:${sumPositive}`;
};
// let findMaxNumber = () => {
//   let max = numberArr[0];
//   for (let i = 0; i < numberArr.length; i++) {
//     if (numberArr[i] > max) {
//       max = numberArr[i];
//     }
//   }
//   document.getElementById("result-max").innerHTML = `số lớn nhất là:${max}`;
// };
let findMinNumber = () => {
  let min = numberArr[0];

  numberArr.forEach((i) => {
    if (numberArr[i] < min) {
      min = numberArr[i];
    }
  });
  document.getElementById("result-min").innerHTML = `số bé nhất là:${min}`;
};
let findMinPositiveNumber = () => {
  let min = numberArr[0];

  numberArr.forEach((i) => {
    if (numberArr[i] < min && numberArr[i] > 0) {
      min = numberArr[i];
    }
  });
  document.getElementById(
    "result-minPositive"
  ).innerHTML = `số dương bé nhất là:${min}`;
};
let finalEven = () => {
  let finalEven = -1;
  // numberArr.forEach((i) => {
  //   if (numberArr[i] % 2 == 0) {
  //     finalEven = numberArr[i];
  //   }
  // });
  for (let i = 0; i < numberArr.length; i++) {
    let value = numberArr[i];
    if (value % 2 == 0) {
      finalEven = value;
    }
  }
  document.getElementById(
    "result-finalEven"
  ).innerHTML = `số chẵn cuối cùng là:${finalEven}`;
};
function swapElements() {
  // Kiểm tra điều kiện chỉ số hợp lệ
  let index1 = document.getElementById("number1").value * 1;
  let index2 = document.getElementById("number2").value * 1;
  if (
    index1 >= 0 &&
    index1 < numberArr.length &&
    index2 >= 0 &&
    index2 < numberArr.length
  ) {
    // Sử dụng vòng lặp for để duyệt qua mảng (chỉ để minh họa)
    for (let i = 0; i < numberArr.length; i++) {
      if (i === index1) {
        // Lưu giá trị của phần tử tại index1
        let temp = numberArr[index1];
        // Đổi giá trị giữa index1 và index2
        numberArr[index1] = numberArr[index2];
        numberArr[index2] = temp;
        document.getElementById("result-number2").innerHTML = numberArr;
        break; // Thoát vòng lặp sau khi đổi chỗ
      }
    }
  } else {
    alert("vui lòng nhập lại câu 6");
  }
}
function sortArrayAscending() {
  for (let i = 0; i < numberArr.length - 1; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      if (numberArr[i] > numberArr[j]) {
        // Hoán đổi giá trị nếu phần tử trước lớn hơn phần tử sau
        let temp = numberArr[i];
        numberArr[i] = numberArr[j];
        numberArr[j] = temp;
      }
    }
  }
  document.getElementById("result-number3").innerHTML = numberArr;
  return numberArr;
}
function isPrime(num) {
  if (num <= 1) return false; // Số nhỏ hơn hoặc bằng 1 không phải là số nguyên tố
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function findFirstPrime() {
  for (let i = 0; i < numberArr.length; i++) {
    if (isPrime(numberArr[i])) {
      document.getElementById(
        "result8"
      ).innerHTML = `nguyên tố đầu tiên là:${numberArr[i]}`;
      return numberArr[i];
    }
  }
  return null; // Không tìm thấy số nguyên tố nào
}
function countIntegers() {
  let count = 0;
  for (let i = 0; i < numberArr2.length; i++) {
    // Kiểm tra nếu phần tử là số nguyên
    if (Number.isInteger(numberArr2[i])) {
      count++;
    }
  }
  document.getElementById("result9").innerHTML = `số nguyên có:${count} số`;
  return count;
}

function soSanhDuongVaAm() {
  let positiveCount = 0;
  let negativeCount = 0;

  // Sử dụng vòng lặp for để duyệt qua từng phần tử trong mảng
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] > 0) {
      positiveCount++; // Tăng số lượng số dương
    } else if (numberArr[i] < 0) {
      negativeCount++; // Tăng số lượng số âm
    }
  }

  // So sánh và in ra kết quả
  if (positiveCount > negativeCount) {
    document.getElementById("result10").innerHTML = `Dương nhiều hơn âm`;
  } else if (negativeCount > positiveCount) {
    document.getElementById("result10").innerHTML = `Dương ít hơn âm`;
  } else {
    document.getElementById("result10").innerHTML = `Dương bằng âm`;
  }
}
