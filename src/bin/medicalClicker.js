/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

import robot from 'robotjs';

import search from '../clicker/search';
// import direction from '../clicker/direction';
import visit from '../clicker/visit';
import service from '../clicker/service';
import surveillance from '../clicker/surveillance';
import result from '../clicker/result';
import tnm from '../clicker/tnm';

import { toSleep, toClick, sleepUntilGetCorrectPixel } from '../utils';

robot.setMouseDelay(10); // 100
robot.setKeyboardDelay(10); // 100

const clicker = (surname, name, pathronymic, birth, department, clinician, diseaseCode, visitCode, medicalService, diagnost, date) => {
  search(surname, name, pathronymic, birth);

  // direction(department, clinician, diseaseCode);

  // sleepUntilGetCorrectPixel(720, 197, '556677');

  toSleep(2500);

  toClick.normal(114, 599);

  sleepUntilGetCorrectPixel(966, 197, '36383c');

  surveillance();

  sleepUntilGetCorrectPixel(225, 495, 'ffffff');

  // "Посещение пациентом поликлиники: Добавление", стационар
  if (visit(diseaseCode, visitCode, diagnost, date) === false) {
    toSleep(5000);

    return false;
  }

  toSleep(2500);

  toClick.smooth(110, 755);
  toClick.smooth(148, 785);

  if (service(medicalService) === false) {
    toClick.normal(1354, 925);

    sleepUntilGetCorrectPixel(339, 720, '505e72');

    toClick.smooth(135, 765);
    toClick.smooth(135, 795);

    service(medicalService);
  }

  sleepUntilGetCorrectPixel(93, 974, 'ffffff');

  result();

  toClick.normal(130, 1050);

  if ((diseaseCode.slice(0, 1) === 'C') || (diseaseCode.slice(0, 2) === 'D0')) {
    tnm();
  }

  sleepUntilGetCorrectPixel(1424, 195, 'd7d8db');

  toSleep(2500);

  return 1;
};

export default clicker;
