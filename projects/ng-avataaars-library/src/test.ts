// This file is required by karma.conf.js and loads recursively all the .spec and framework files
/* eslint-disable */

import { getTestBed } from '@angular/core/testing';
import {
  platformBrowserDynamicTesting,
  BrowserDynamicTestingModule
} from '@angular/platform-browser-dynamic/testing';
import 'core-js/es7/reflect';
import 'zone.js';
import 'zone.js/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(), {
    teardown: { destroyAfterEach: false }
}
);
