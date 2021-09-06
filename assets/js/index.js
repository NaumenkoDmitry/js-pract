"use strict";
//1

function Numbers(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    return (result += i);
  }
}
//2
const univers = {
  faculty: "matemat",
  cafedral: "program",
};
const student = {
  name: "Test",
  lastName: "Testoviche",
  gender: "Man",
  contacts: "3423523525",
  unic: univers,
};
function getInfo() {
  console.log(
    `Имя: ${student.name} Фамилия:${student.lastName} Пол:${student.gender} Контактные данные:${student.contacts} Кафедра:${student.unic.faculty} Факультет:${student.unic.cafedral}`
  );
}
//3
const value = [];
for (let i = 1; i <= 25; i++) {
  value.push(i);
}
function evenNumbers() {
  for (let i = 0; i < value.length; i++)
    if (i % 2 == 0) {
      console.log(value[i]);
    }
}
//evenNumbers();
value[5] = 0;
value[8] = 0;
function zero() {
  for (let i = 0; i < value.length; i++)
    if (value[i] === 0) {
      console.log([i]);
    }
}
//zero();
const arr = value.filter((item) => item === 0);

//console.log(arr.length);
//4
class Book {
  constructor(author, title, yearPublic, publisher) {
    this.author = author;
    this.title = title;
    this.yearPublic = yearPublic;
    this.publisher = publisher;
  }
}
class EBook extends Book {
  constructor(author, title, yearPublic, publisher, format, electrNumber) {
    super(author, title, yearPublic, publisher);
    this.format = format;
    this.electrNumber = electrNumber;
  }
}

//5
function fizzbuzzer(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

