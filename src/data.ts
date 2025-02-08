import { faker } from "@faker-js/faker";

export type Order = {
  id: string;
  order: string;
  date: string;
  customer: string;
  total: string;
};

export const orders: Order[] = Array.from({ length: 50 }, () => ({
  id: faker.string.uuid(),
  order: faker.word.words(2),
  date: faker.date.recent().toLocaleDateString(),
  customer: faker.person.fullName(),
  total: faker.number.int({ min: 100, max: 1000 }).toString(),
}));
