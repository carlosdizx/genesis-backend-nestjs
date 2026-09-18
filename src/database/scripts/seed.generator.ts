import { join } from 'path';
import createTimestampedFile from '../config/create-timestamped-file';
import migrationTemplate from '../config/migration-template';
import idUtil from '../../common/utils/id.util';

let name = process.argv[2];

if (!name) name = idUtil('seed', 10);

const filePath = createTimestampedFile(
  join(__dirname, '../seeders'),
  name,
  migrationTemplate,
);

console.log(`Created ${filePath}`);
