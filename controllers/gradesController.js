import express from 'express';
import { promises } from 'fs';

const { readFile, writeFile } = promises;

// function to start
async function insertGrades(grade) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    grade = { id: json.nextId++, ...grade, timeStamp: new Date() };

    json.grades.push(grade);

    await writeFile(global.FileName, JSON.stringify(json));

    return grade;
  } catch (err) {
    return err;
  }
}

async function updateGrades(oldId, grade) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    let oldIndex = json.grades.findIndex(
      ({ id }) => id === parseInt(oldId, 10)
    );

    json.grades[oldIndex].student = grade.student;
    json.grades[oldIndex].subject = grade.subject;
    json.grades[oldIndex].type = grade.type;
    json.grades[oldIndex].value = grade.value;

    await writeFile(global.FileName, JSON.stringify(json));

    return grade;
  } catch (err) {
    return err;
  }
}

async function getGrade(getId) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    let grades = json.grades.find(({ id }) => id === parseInt(getId, 10));

    return grades;
  } catch (err) {
    return err;
  }
}

async function getTotalGrade(getStudent, getSubject) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    let grades = json.grades.filter(
      ({ student, subject }) => student === getStudent && subject === getSubject
    );

    let sum = grades.reduce((acc, cur) => {
      return acc + cur.value;
    }, 0);

    return sum;
  } catch (err) {
    return err;
  }
}

async function getAvgGrade(getSubject, getType) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    let grades = json.grades.filter(
      ({ subject, type }) => subject === getSubject && type === getType
    );

    console.log(grades);
    let sum = grades.reduce((acc, cur) => {
      return acc + cur.value;
    }, 0);

    return sum / grades.length;
  } catch (err) {
    return err;
  }
}

async function getTop3(getSubject, getType) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    let grades = json.grades.filter(
      ({ subject, type }) => subject === getSubject && type === getType
    );

    console.log(grades);

    let gradesOrdered = grades.sort((a, b) => {
      let x = a.value;
      let y = b.value;

      return x > y ? -1 : x < y ? 1 : 0;
    });

    return gradesOrdered.slice(0, 3);
  } catch (err) {
    return err;
  }
}

async function deleteGrade(oldId) {
  try {
    const data = await readFile(global.FileName);
    const json = JSON.parse(data);

    let grades = json.grades.filter(({ id }) => id !== parseInt(oldId, 10));

    json.grades = grades;

    await writeFile(global.FileName, JSON.stringify(json));

    console.log(json.grades);

    return;
  } catch (err) {
    return err;
  }
}

export {
  insertGrades,
  updateGrades,
  getGrade,
  deleteGrade,
  getTotalGrade,
  getAvgGrade,
  getTop3,
};
