const text = 'some_underscore AND_some   stran_GE     defini_tions';

const underscoreToCamel = function () {
  const lowText = text.toLowerCase().split(' '); //divides into words

  for (const [i, textArray] of lowText.entries()) {
    let [word1, word2] = textArray.trim().split('_'); //trims extra spaces and divides every word into 2 parts
    const wordNew2 = word2[0].toUpperCase() + word2.slice(1); //changes the 2nd part to Upper Case
    const camelCase = word1 + wordNew2; //connects the 2 parts together in CamelNotation
    console.log(`${camelCase.padEnd(20)}${'!'.repeat(i) + 1}`); //logs some extra ! as fireworks ;)
  }
};
