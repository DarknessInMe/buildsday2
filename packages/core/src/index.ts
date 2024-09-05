import { Root } from './Root';

const root = new Root();

console.log(JSON.stringify(root.serialize(), null, 2));