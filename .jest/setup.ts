import '@testing-library/jest-dom';
import 'jest-styled-components';
import 'jest-canvas-mock';

import * as ResizeObserverModule from 'resize-observer-polyfill';

global.ResizeObserver = ResizeObserverModule.default;
