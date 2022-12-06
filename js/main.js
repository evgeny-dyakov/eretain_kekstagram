function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(3, 5);

function checkStringLength (string, length) {
  if (string.length > length) {
    return false;
  }
  return true;
}

checkStringLength('hi', 1);

function testFoo () {
  return 'hello test';
}

testFoo();
