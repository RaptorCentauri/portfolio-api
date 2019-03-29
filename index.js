
const YAML = require('yamljs');
const {Manager} = require('@projectbuilder/projectbuilder-core');
console.log('coming along')
const project = YAML.load('./prjbconfig.yml')
const myManager = new Manager(project);
myManager.initialize(7500);
