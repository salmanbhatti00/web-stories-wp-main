/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Internal dependencies
 */
import type { Font, FontMetrics, FontStyle, FontWeight } from './types';

const DEFAULT_ATTRIBUTES = {
  weights: [400, 700] as FontWeight[],
  styles: ['italic', 'regular'] as FontStyle[],
  service: 'system',
};

export const SYSTEM_FONTS: Font[] = [
  {
    family: 'Arial',
    fallbacks: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 1854,
      des: -434,
      tAsc: 1491,
      tDes: -431,
      tLGap: 307,
      wAsc: 1854,
      wDes: 1854,
      xH: 1062,
      capH: 1467,
      yMin: -665,
      yMax: 2060,
      hAsc: 1854,
      hDes: -434,
      lGap: 67,
    } as FontMetrics,
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Arial Black',
    fallbacks: ['Arial Black', 'Arial Bold', 'Gadget', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 2254,
      des: -634,
      tAsc: 1466,
      tDes: 434,
      tLGap: 291,
      wAsc: 2254,
      wDes: 2254,
      xH: 1062, // from Arial
      capH: 1467, // from Arial
      yMin: -628,
      yMax: 2219,
      hAsc: 2254,
      hDes: -634,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Arial Narrow',
    fallbacks: ['Arial', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 1916,
      des: -434,
      tAsc: 1491,
      tDes: -431,
      tLGap: 269,
      wAsc: 1888,
      wDes: 1888,
      xH: 1062, // from Arial
      capH: 1467, // from Arial
      yMin: -628,
      yMax: 2224,
      hAsc: 1916,
      hDes: -434,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Baskerville',
    fallbacks: [
      'Baskerville Old Face',
      'Hoefler Text',
      'Garamond',
      'Times New Roman',
      'serif',
    ],
    metrics: {
      upm: 2048,
      asc: 1839,
      des: -504,
      tAsc: 1376,
      tDes: -504,
      tLGap: 311,
      wAsc: 1839,
      wDes: 1839,
      xH: 819,
      capH: 1356,
      yMin: -504,
      yMax: 1869,
      hAsc: 1839,
      hDes: -504,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Brush Script MT',
    fallbacks: ['cursive'],
    metrics: {
      upm: 2048,
      asc: 1820,
      des: -692,
      tAsc: 1229,
      tDes: -506,
      tLGap: 456,
      wAsc: 1820,
      wDes: 1820,
      xH: undefined,
      capH: undefined,
      yMin: -692,
      yMax: 1983,
      hAsc: 1820,
      hDes: -692,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Copperplate',
    fallbacks: ['Copperplate Gothic Light', 'fantasy'],
    metrics: {
      upm: 1000,
      asc: 763,
      des: -248,
      tAsc: 763,
      tDes: -250,
      tLGap: 20,
      wAsc: 763,
      wDes: 763,
      xH: 440,
      capH: 526,
      yMin: -248,
      yMax: 924,
      hAsc: 763,
      hDes: -248,
      lGap: 19,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Courier New',
    fallbacks: [
      'Courier',
      'Lucida Sans Typewriter',
      'Lucida Typewriter',
      'monospace',
    ],
    metrics: {
      upm: 2048,
      asc: 1705,
      des: -615,
      tAsc: 1255,
      tDes: -386,
      tLGap: 0,
      wAsc: 1705,
      wDes: 1705,
      xH: 866,
      capH: 1170,
      yMin: -1392,
      yMax: 2091,
      hAsc: 1705,
      hDes: -615,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Century Gothic',
    fallbacks: ['CenturyGothic', 'AppleGothic', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 2060,
      des: -451,
      tAsc: 1536,
      tDes: -426,
      tLGap: 229,
      wAsc: 1989,
      wDes: 1989,
      xH: undefined,
      capH: undefined,
      yMin: -628,
      yMax: 2170,
      hAsc: 2060,
      hDes: -451,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Garamond',
    fallbacks: [
      'Baskerville',
      'Baskerville Old Face',
      'Hoefler Text',
      'Times New Roman',
      'serif',
    ],
    metrics: {
      upm: 2048,
      asc: 1765,
      des: -539,
      tAsc: 1339,
      tDes: -539,
      tLGap: 313,
      wAsc: 1765,
      wDes: 1765,
      xH: undefined,
      capH: undefined,
      yMin: -762,
      yMax: 2040,
      hAsc: 1765,
      hDes: -539,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Georgia',
    fallbacks: ['Times', 'Times New Roman', 'serif'],
    metrics: {
      upm: 2048,
      asc: 1878,
      des: -449,
      tAsc: 1549,
      tDes: -444,
      tLGap: 198,
      wAsc: 1878,
      wDes: 1878,
      xH: 986,
      capH: 1419,
      yMin: -621,
      yMax: 2201,
      hAsc: 1878,
      hDes: -449,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Gill Sans',
    fallbacks: ['Gill Sans MT', 'Calibri', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 1880,
      des: -472,
      tAsc: 1415,
      tDes: -471,
      tLGap: 305,
      wAsc: 1880,
      wDes: 1880,
      xH: 920,
      capH: 1397,
      yMin: -473,
      yMax: 1896,
      hAsc: 1880,
      hDes: -472,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Lucida Bright',
    fallbacks: ['Georgia', 'serif'],
    metrics: {
      upm: 2048,
      asc: 1980,
      des: -432,
      tAsc: 1579,
      tDes: -420,
      tLGap: 49,
      wAsc: 1900,
      wDes: 1900,
      xH: undefined,
      capH: undefined,
      yMin: -432,
      yMax: 1900,
      hAsc: 1980,
      hDes: -432,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Lucida Sans Typewriter',
    fallbacks: [
      'Lucida Console',
      'monaco',
      'Bitstream Vera Sans Mono',
      'monospace',
    ],
    metrics: {
      upm: 2048,
      asc: 1974,
      des: -432,
      tAsc: 1579,
      tDes: 420,
      tLGap: 49,
      wAsc: 1900,
      wDes: 1900,
      xH: undefined,
      capH: undefined,
      yMin: -420,
      yMax: 1900,
      hAsc: 1974,
      hDes: -432,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Palatino',
    fallbacks: [
      'Palatino Linotype',
      'Palatino LT STD',
      'Book Antiqua',
      'Georgia',
      'serif',
    ],
    metrics: {
      upm: 2048,
      asc: 1491,
      des: -600,
      tAsc: 1491,
      tDes: -580,
      tLGap: 0,
      wAsc: 2322,
      wDes: 2322,
      xH: undefined,
      capH: undefined,
      yMin: -580,
      yMax: 2322,
      hAsc: 1491,
      hDes: -600,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Papyrus',
    fallbacks: ['fantasy'],
    metrics: {
      upm: 2048,
      asc: 1925,
      des: -1235,
      tAsc: 1913,
      tDes: -780,
      tLGap: -502,
      wAsc: 1925,
      wDes: 1925,
      xH: 910,
      capH: 1351,
      yMin: -1235,
      yMax: 1935,
      hAsc: 1925,
      hDes: -1235,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Tahoma',
    fallbacks: ['Verdana', 'Segoe', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 2049,
      des: -423,
      tAsc: 1566,
      tDes: -423,
      tLGap: 59,
      wAsc: 2049,
      wDes: 2049,
      xH: 1117,
      capH: 1489,
      yMin: -442,
      yMax: 2118,
      hAsc: 2049,
      hDes: -423,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Times New Roman',
    fallbacks: ['Times New Roman', 'Times', 'Baskerville', 'Georgia', 'serif'],
    metrics: {
      upm: 2048,
      asc: 1825,
      des: -443,
      tAsc: 1420,
      tDes: -442,
      tLGap: 307,
      wAsc: 1825,
      wDes: 1825,
      xH: 916,
      capH: 1356,
      yMin: -628,
      yMax: 2062,
      hAsc: 1825,
      hDes: -443,
      lGap: 87,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Trebuchet MS',
    fallbacks: [
      'Lucida Grande',
      'Lucida Sans Unicode',
      'Lucida Sans',
      'Tahoma',
      'sans-serif',
    ],
    metrics: {
      upm: 2048,
      asc: 1923,
      des: -455,
      tAsc: 1510,
      tDes: -420,
      tLGap: 0,
      wAsc: 1923,
      wDes: 1923,
      xH: undefined,
      capH: undefined,
      yMin: -537,
      yMax: 1931,
      hAsc: 1923,
      hDes: -455,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
  {
    family: 'Verdana',
    fallbacks: ['Geneva', 'sans-serif'],
    metrics: {
      upm: 2048,
      asc: 2059,
      des: -430,
      tAsc: 1566,
      tDes: -423,
      tLGap: 202,
      wAsc: 2059,
      wDes: 2059,
      xH: 1117,
      capH: 1489,
      yMin: -621,
      yMax: 2049,
      hAsc: 2059,
      hDes: -430,
      lGap: 0,
    },
    ...DEFAULT_ATTRIBUTES,
  },
];
