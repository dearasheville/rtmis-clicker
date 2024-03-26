import robot from 'robotjs';

import mouse from '../../input-devices/mouse.js';
import keyboard from '../../input-devices/keyboard.js';

import {
  toSleep, sleepUntilGetCorrectPixel,
} from '../../utils/sleep.js';

const service2 = (diagnostData) => {
  const researchDate = diagnostData[0];
  const diagnostCode = diagnostData[1];
  const medicalVisitCode = diagnostData[2];
  const medicalDenominationCode = diagnostData[4];

  keyboard.tap('pageup');

  // "Результат выполнения услуги: Основные данные", "Код посещения"
  sleepUntilGetCorrectPixel([235, 318], 'ccffcc');

  // "Результат выполнения услуги: Основные данные", "Услуга: Поиск"
  mouse.click(722, 326);
  sleepUntilGetCorrectPixel([1745, 380], 'd6d8da');

  toSleep(1000); // ?

  keyboard.type(medicalVisitCode);
  keyboard.tap('enter');

  toSleep(2000); // ??
  // sleepUntilGetCorrectPixel([605, 450], 'fbf0d2');
  keyboard.tap('enter', 2);

  // "Результат выполнения услуги: Основные данные", "Дата исследования"
  mouse.click(235, 352);
  keyboard.type(researchDate);

  // "Результат выполнения услуги: Основные данные", "№ услуги из журнала"
  mouse.click(235, 380);
  keyboard.type('0');

  // "Результат выполнения услуги: Основные данные", "Врач"
  mouse.click(235, 500);
  toSleep(1000); // ??
  keyboard.type(diagnostCode);
  mouse.move(240, 540);
  sleepUntilGetCorrectPixel([238, 540], 'fbf0d2');
  keyboard.tap('enter');

  // "Результат выполнения услуги: Основные данные", "Лучевая нагрузка"
  if (robot.getPixelColor(235, 600) === 'ccffcc') {
    mouse.click(235, 600);
    keyboard.type('0');
  }
};

export default service2;
