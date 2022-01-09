export {};

//関数に値が渡されない、あるいはundifinedが渡ってきた場合のデフォルト値
//javascriptと同じように指定できる

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000));
