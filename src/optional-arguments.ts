export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.7, 60);

// bmi(身長,体重,console.logで出力するかどうか?)
// bmi(1.7,60,true) → consoleで出力
// bmi(1.7,60,false) → consoleで出力しない
// bmi(1.7,60) → consoleで出力しない
