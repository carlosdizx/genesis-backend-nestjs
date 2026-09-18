import { join } from 'path';
import createTimestampedFile from '../config/create-timestamped-file';
import migrationTemplate from '../config/migration-template';
import idUtil from '../../common/utils/id.util';

let name = process.argv[2];

if (!name) name = idUtil('mig', 10);

const filePath = createTimestampedFile(
  join(__dirname, '../migrations'),
  name,
  migrationTemplate,
);

console.log(`Created ${filePath}`);
