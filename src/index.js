/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import clicker from './bin/medicalClicker';
import spreadsheet from './bin/medicalSpreadsheet';
import { toSleep } from './utils';

const getData = (array, first, second) => {
  const line = array;

  const person = line[0].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];
  const birth = line[2];

  const diseaseCode = String(line[3]);
  const department = line[4];
  const clinician = line[5];

  const visitCode = String(first);
  const medicalService = String(`A${second.slice(1)}`);

  // const visitCode = String(line[5]);
  // const medicalService = String(`A${line[6].slice(1)}`);

  const diagnost = String(line[8].split(' ').join(' '));

  const date = String(line[7]);

  const isTheTicketFilledCorrect = () => {
    const ticketResultMessage = clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date);

    toSleep(2500);

    return ticketResultMessage ? true : isTheTicketFilledCorrect();
  };

  return isTheTicketFilledCorrect();
};

/**
const getData = (array, first, second) => {
  const line = array;

  const person = line[0].split(' ');

  const surname = person[0];
  const name = person[1];
  const pathronymic = person[2];
  const birth = line[1];

  const department = line[2];
  const clinician = line[3];
  const diseaseCode = String(line[4]);

  const visitCode = String(first);
  const medicalService = String(`A${second.slice(1)}`);

  // const visitCode = String(line[5]);
  // const medicalService = String(`A${line[6].slice(1)}`);

  const diagnost = String(line[7].split(' ').join(' '));

  const date = String(line[8]);

  return clicker(surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date);
};
 */

// spreadsheet.forEach(elem => getData(elem));

spreadsheet.map((elem) => {
  // console.log(elem);

  const res = elem.map((el, index, array) => {
    if (String(el).slice(0, 2) === '87') {
      return getData(elem, el, elem[array.indexOf(el) + 1]);
    }
  });
});
