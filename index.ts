import { getProgramFromFiles, buildGenerator } from 'typescript-json-schema';
import jsf from 'json-schema-faker';

let buildArgs = {

  /**Create required array for non-optional properties */
  required: true,
};

let jsfOptions = {
  'useExamplesValue': true,
  'useDefaultValue': true,
  'replaceEmptyByRandomValue': true,
};

function getSchema (files, mainTypeName) {
  const program = getProgramFromFiles(files);
  const generator = buildGenerator(program, buildArgs);
  const schema = mainTypeName === '*' ?
    generator.getSchemaForSymbols(generator.getMainFileSymbols(program)) :
    generator.getSchemaForSymbol(mainTypeName);

  return schema;
}

export function createMock (files: string[] | string, mainTypeName: string = '*', options?: any) {
  if (!Array.isArray(files)) files = [files]
  Object.assign(jsfOptions, options?.jsfOptions || {});
  Object.assign(buildArgs, options?.buildArgs || {});

  try {
    const schema = getSchema(files, mainTypeName);
    jsf.option(jsfOptions);
    return jsf.generate(schema as any, []);
  } catch (e) {
    console.error(`\n------ naive-mock: ${mainTypeName} mock failed ------\n`);
    throw new Error(e);
  }
}
