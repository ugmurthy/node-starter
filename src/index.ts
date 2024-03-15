//const fs=require('fs');
//console.log("Hi Node up and running with common js style import")

import fs from 'fs';
// When using NodeNext it is important to use the file extension
// note the file extension corresponds to the one in dist and not src
import person from './data.cjs'; // common js module
import {data} from './helpers.js';
import aboutme from './helper.cjs'; // common js module
console.log("---------------------------------------------")
console.log("Hello this is node - using ES style import")
console.log("Person ",data);
console.log("Person ",aboutme.person)
aboutme.printName();
aboutme.person.name = "Great Guru"
aboutme.printName();
aboutme.printRole();
console.log("---------------------------------------------");
console.log();
console.log("Person ",person, Object.entries(person))
console.log("---------------------------------------------");

