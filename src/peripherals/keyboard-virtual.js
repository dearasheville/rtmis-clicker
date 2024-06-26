import mouse from './mouse.js';

const alphabet = {
  1: { x: 1218, y: 950 },
  2: { x: 1245, y: 950 },
  3: { x: 1272, y: 950 },
  4: { x: 1299, y: 950 },
  5: { x: 1326, y: 950 },
  6: { x: 1353, y: 950 },
  7: { x: 1380, y: 950 },
  8: { x: 1407, y: 950 },
  9: { x: 1434, y: 950 },
  0: { x: 1461, y: 950 },
  '-': { x: 1488, y: 950 },
  '=': { x: 1515, y: 950 },

  й: { x: 1205, y: 980 },
  ц: { x: 1232, y: 980 },
  у: { x: 1259, y: 980 },
  к: { x: 1286, y: 980 },
  е: { x: 1313, y: 980 },
  г: { x: 1367, y: 980 },
  ш: { x: 1394, y: 980 },
  щ: { x: 1421, y: 980 },
  з: { x: 1448, y: 980 },
  х: { x: 1475, y: 980 },
  ъ: { x: 1502, y: 980 },

  ф: { x: 1218, y: 1005 },
  ы: { x: 1245, y: 1005 },
  в: { x: 1272, y: 1005 },
  а: { x: 1299, y: 1005 },
  п: { x: 1326, y: 1005 },
  р: { x: 1353, y: 1005 },
  о: { x: 1380, y: 1005 },
  л: { x: 1407, y: 1005 },
  д: { x: 1434, y: 1005 },
  ж: { x: 1461, y: 1005 },
  э: { x: 1488, y: 1005 },

  я: { x: 1232, y: 1030 },
  ч: { x: 1259, y: 1030 },
  с: { x: 1286, y: 1030 },
  м: { x: 1313, y: 1030 },
  и: { x: 1340, y: 1030 },
  т: { x: 1367, y: 1030 },
  ь: { x: 1394, y: 1030 },
  б: { x: 1421, y: 1030 },
  ю: { x: 1448, y: 1030 },
  '.': { x: 1475, y: 1030 },
  ' ': { x: 1272, y: 1060 },
};

const keyboardVirtual = {
  type: (text) => {
    const [normalizedText] = text.toLowerCase().split(' (');

    normalizedText.split('').forEach((letter) => {
      mouse.click(alphabet[letter]);
    });
  },
};

export default keyboardVirtual;
