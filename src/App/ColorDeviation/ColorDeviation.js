import styled from "styled-components";

const getColorPrecision = (from, to) => (Math.abs(from - to) / 255) * 100;

const Result = styled.div`
  background-color: ${({ value, threshold }) =>
    value < threshold ? "lightgreen" : "indianred"};
`;

const sum = (array) => array.reduce((acc, value) => acc + value, 0);
const average = (array) => sum(array) / array.length;

const ColorDeviation = ({ from, to }) => {
  console.log(from, to);
  const colorPrecisions = Object.entries(from).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: getColorPrecision(value, to[key]),
    }),
    {}
  );
  const averagePrecision = average(Object.values(colorPrecisions));
  return (
    <Result value={averagePrecision} threshold={10}>
      {colorPrecisions.cyan.toFixed(0)}%,
      {colorPrecisions.magenta.toFixed(0)}%,
      {colorPrecisions.yellow.toFixed(0)}%,
      {averagePrecision.toFixed(0)}%
    </Result>
  );
};

export default ColorDeviation;
