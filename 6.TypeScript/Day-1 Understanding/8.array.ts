const arr2: number[] = [1, 2];

interface IProduct {
  id: number;
  name: string;
}
const productsV1: IProduct[] = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro Max",
  },
  {
    id: 3,
    name: "Apple iPhone 13 Pro Max",
  },
];

for (let i = 0; i < productsV1.length; i++) {}

const productsV2: Array<IProduct> = [
  {
    id: 1,
    name: "Apple iPhone 15 Pro Max",
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro Max",
  },
  {
    id: 3,
    name: "Apple iPhone 13 Pro Max",
  },
];
