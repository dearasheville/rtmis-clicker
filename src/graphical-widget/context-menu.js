import robot from 'robotjs';

import mouse from '../peripherals/mouse.js';
import clipboard from '../utils/clipboard.js';

import {
  sleepUntilPointColorUnmatchesList,
} from '../utils/sleep.js';

const contextMenuPoint = {
  copy: {
    lower: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y + 20,
    },
    upper: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y - 445,
    },
  },
  paste: {
    lower: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y + 190,
    },
    upper: {
      x: robot.getMousePos().x + 10,
      y: robot.getMousePos().y - 300,
    },
  },
};

const pixelsForСontextMenuPoint = {
  copy: {
    lower: {
      x: 10,
      y: 20,
    },
    upper: {
      x: 10,
      y: -445,
    },
  },
  paste: {
    lower: {
      x: 10,
      y: 190,
    },
    upper: {
      x: 10,
      y: -300,
    },
  },
};

const contextMenuColor = {
  highlighted: 'd3dfe9',
};

class ContextMenu {
  constructor(startPoint) {
    this.startPoint = startPoint;
  }

  copy(style = 'lower') {
    switch (style) {
      case 'lower':
        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.copy.lower);
        sleepUntilPointColorUnmatchesList(contextMenuPoint.copy.lower, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.copy.lower);
        break;
      case 'upper':
        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.copy.upper);
        sleepUntilPointColorUnmatchesList(contextMenuPoint.copy.upper, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.copy.upper);
        break;
      default:
        break;
    }

    return clipboard.readSync();
  }

  paste(text, style = 'lower') {
    switch (style) {
      case 'lower':
        clipboard.write(text);

        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.paste.lower);
        sleepUntilPointColorUnmatchesList(contextMenuPoint.paste.lower, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.paste.lower);
        break;
      case 'upper':
        clipboard.write(text);

        mouse.click(this.startPoint, 'right');

        mouse.move(contextMenuPoint.paste.upper);
        sleepUntilPointColorUnmatchesList(contextMenuPoint.paste.upper, contextMenuColor.highlighted);

        mouse.click(contextMenuPoint.paste.upper);
        break;
      default:
        break;
    }
  }
}

export default ContextMenu;
