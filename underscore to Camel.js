const test = 'some_underscore AND_some   stran_GE     defini_tions';

//1st option
const underscoreToCamel1 = function (text) {
  const lowText = text.toLowerCase().split(' '); //divides into words

  for (const [i, textArray] of lowText.entries()) {
    let [word1, word2] = textArray.trim().split('_'); //trims extra spaces and divides every word into 2 parts
    const wordNew2 = word2[0].toUpperCase() + word2.slice(1); //changes the 2nd part to Upper Case
    const camelCase = word1 + wordNew2; //connects the 2 parts together in CamelNotation
    console.log(`${camelCase.padEnd(20)}${'!'.repeat(i) + 1}`); //logs some extra ! as fireworks ;)
  }
};
console.log(underscoreToCamel1(test));

//2nd option
const underscoreToCamel2 = text =>
  text
    .toLowerCase()
    .split(' ')
    .filter(v => v !== '') //to avoid empty strings appearing
    .map(w =>
      w
        .split('_')
        .reduce(
          (acc, v, i) => acc + (i === 0 ? v : v[0].toUpperCase() + v.slice(1)),
          ''
        )
    ) //whole map section divides underscore notation, throws out the '_' and makes the 1st letter of words the Upper Case (but not the 1st word)
    .join(' '); //return a string

console.log(underscoreToCamel2(test));

//3rd option
//divides longer strings into phrases and cuts out empty stings
const separateStrings = text =>
  text
    .toLowerCase()
    .split(' ')
    .filter(w => w !== '');

//converts underscore to camel notation
const underscoreToCamel3 = function (fn, str) {
  const camel = fn(str)
    .map(w =>
      w
        .split('_')
        .reduce(
          (acc, v, i) => acc + (i === 0 ? v : v[0].toUpperCase() + v.slice(1)),
          ''
        )
    )
    .join(' ');
  return console.log(camel);
};
underscoreToCamel3(separateStrings, test);

//different function that changes full names into initials only
const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });


