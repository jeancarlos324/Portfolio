const converIdToNumber = (value: string) => {
  const newArray = value.split("");
  const transformData = newArray.map((_value, index) => {
    if (index % 2 == 0) {
      return newArray[index].concat(newArray[index + 1]);
    }
    return undefined;
  });
  const filterData = transformData.filter((value) => value !== undefined);
  const newData = filterData.map((_value: any) => parseInt(_value, 16));
  const multiplyData = newData.map((_value, index) => {
    if (index % 2 === 0) {
      return newData[index] * newData[index + 1];
    }
    return undefined;
  });
  const clearData = multiplyData.filter((number) => number !== undefined);
  const sumData = clearData.reduce((a: number, b: any) => a + b, 0);
  console.log(clearData);
  return sumData;
};
console.log(converIdToNumber("ffffffffffffffffffffffff"));

export default converIdToNumber;
