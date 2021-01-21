export const radius = "20px";
export const primaryDark1 = "#97989c";
export const primaryDark2 = "#65666b";
export const primary = "#e0e2d5";
export const primaryLight1 = "#fffdf1";
export const boxShadow1 = `0px 3px 4px ${primaryDark2}`;
export const boxShadow2 = `0px 5px 10px ${primaryDark2}`;
export const bottomBorderGradient = (from, to) =>
  `linear-gradient(to right, ${from}, ${to}, ${from})`;
export const fontWeight = 900;
export const fontSize = "1.5rem";
export const containerGradient = (from, to) => `radial-gradient(
    100% 120% at 50% 100%,
    ${from} 50%,
    ${to}
  );`;
