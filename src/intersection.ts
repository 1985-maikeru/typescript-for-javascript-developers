export {};

//既存の型を活かしつつ新たな型を作成する

type Pitcher1 = {
  throwingSpeed: number;
};
type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};
const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

//下記の方法では冗長すぎる
//type TwoWayPlayer = {
//  throwingSpeed: number;
//  battingAverage: number;
//};

//下記方法がintersection型となる。＆で連結するだけ!簡単!
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
