console.time("loop");
const primeNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37];
const converIdToNumber = (value) => {
  const newArray = [...value];
  const transformData = newArray.map((_value, index) => {
    if (index % 2 == 0) {
      const parseValue = parseInt(
        `${newArray[index]}${newArray[index + 1]})`,
        16
      );
      return parseValue + uniqueNumbers[index / 2];
    }
  });
  const filterData = transformData.filter((value) => value !== undefined);
  const multiplyData = filterData.map((_value, index) =>
    index % 2 === 0 ? filterData[index] * filterData[index + 1] : 0
  );
  const sumData = multiplyData.reduce((a, b) => a + b, 0);
  return sumData;
};

const compresed = (value) => {
  const newArray = [];
  for (let i = 0; i < value.length; i += 2) {
    newArray.push(value.slice(i, i + 2));
  }
  const parseArray = newArray.map(
    (_value, index) => parseInt(_value, 16) + primeNumber[index]
  );
  const multiplyArray = parseArray.map((_value, index) =>
    index % 2 == 0 ? parseArray[index] * parseArray[index + 1] : 0
  );
  const total = multiplyArray.reduce((a, b) => a + b, 0);
  return total;
};

console.log(compresed("63483e48eb93271ff546df00"));

console.timeEnd("loop");
//export default converIdToNumber;

//255.255.255.255 = 1020

// ff00ff00
// 00ffff00
// +2+3+5+7
// 255.0.255.0 = 510 +7
// 0.255.0.255 = 510 +10
// 0.255.255.0 = +8
// 255.0.0.255 = +9
// 255.255.0.0 +5
// 0.0.255.0 +5

// 255.0 * 255.255
// 255+2 * 510+5+7
