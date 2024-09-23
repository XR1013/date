console.log("test");

/*
    new Date() : 시간관련 인스턴트 객체를 생성해주는 생성자
    시간관련 인스턴트 객체 : 다양한 시간관련 메쏘드들 호출 가능
*/

const month = [
    "January", 
    "Febuary", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
]; 

const days = [
    "Sunday", 
    "Monday", 
    "Tuesday", 
    "Wednesday", 
    "Thusday", 
    "Friday", 
    "Saturday"
];

const now = new Date();

console.log(now);

// 년도값 반환 
console.log(now.getFullYear());

// 월 반환 (순서값을 반환)
console.log(now.getMonth());

// 일
console.log(now.getDate());

// 요일 (순서값 반환)
console.log(now.getDay());

// 시간
console.log(now.getHours());

// 분
console.log(now.getMinutes());

// 초
console.log(now.getSeconds());

// 우리나라 시간대를 전세계 표준시를 변환해서 반환
// const gmtNow = now.toGMTString()
const gmtNow = now.toUTCString();

console.log(gmtNow);
