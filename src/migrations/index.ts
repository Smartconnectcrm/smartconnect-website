import * as migration_20260721_044549 from './20260721_044549';
import * as migration_20260721_192454 from './20260721_192454';
import * as migration_20260817_091808 from './20260817_091808';

export const migrations = [
  {
    up: migration_20260721_044549.up,
    down: migration_20260721_044549.down,
    name: '20260721_044549',
  },
  {
    up: migration_20260721_192454.up,
    down: migration_20260721_192454.down,
    name: '20260721_192454',
  },
  {
    up: migration_20260817_091808.up,
    down: migration_20260817_091808.down,
    name: '20260817_091808'
  },
];
