export function doubleNumbers(arr) {

  return arr.map(item => item * 2);

}

export function stringItUp(arr) {

  return arr.map(item => item + '');

}

export function capitalizeNames(arr) {

  const lower = arr.map(item => item.toLowerCase());
  const final = lower.map(item => item[0].slice().toUpperCase() + item.slice(1));

  return final;
}

export function namesOnly(arr) {
  return arr.map(item => item.name);
}

export function makeStrings(arr) {
  return arr.map(item => item.age >= 18 ? `${item.name} can go to The Matrix` : `${item.name} is under age!!`);
}

export function readyToPutInTheDOM(arr) {
  return arr.map(item => `<h1>${item.name}</h1><h2>${item.age}</h2>`);
}