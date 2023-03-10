/*
문제 1 : 배열의 삭제
var nums = [100, 200, 300, 400, 500];
풀이
nums.splice(3, 2);
console.log(nums);
*/
/*
문제 2 : 배열의 내장함수
var arr = [200, 100, 300];
풀이
arr.splice(2, 0, 10000);
console.log(arr);
*/
/*
문제 3 : 변수의 타입
var arr = [100, 200, 300];
console.log(typeof arr);
배열이 아닌 배열을 담고 있는 변수의 타입을 묻는것으로
변수는 대표적인 Object type 이다. 고로 답은 4번.
*/
/*
문제 5 : for문 계산
var a = 10;
var b = 2;
for (var i = 1; i < 5; i += 2) {
  a += i;
}
console.log(a + b);
i가 1일때 a의 값은 11이며 이후 i는 2가 증가된 3으로 반복된다.
i가 3일때 a는 11에 3을 더한 14가 되며 i는 2가 증가한 5로 반복되지 않고 끝난다.
a는 14이므로 a+2는 16, 답은 4번.
*/
/*
문제 9 : concat을 활용한 출력 방법
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = //빈칸을 채워주세요

  console.log(result);

출력
2019 / 04 / 26 11: 34: 27
풀이
console.log(year.concat("/", month, "/", day, " ", hour, ":", minute, ":", second));
concat을 이용해 나열
*/
/*
문제 10 : 별 찍기
입력
5

출력
    *
   ***
  *****
 *******
*********
풀이
const num = prompt()
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num - (i + 1); j++) {
    document.write('&nbsp;');
  }
  for (let k = 0; k < (i + 1) * 2 - 1; k++) {
    document.write("*");
  }
  for (let l = 0; l < num - (i + 1); l++) {
    document.write('&nbsp;');
  }
  document.write("<br>");
}
*/