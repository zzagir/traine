/*

const f1 = () =>
  setTimeout(() => {
    console.log(1);
  }, Math.random() * 24);

const f2 = () =>
  setTimeout(() => {
    console.log(2);
  }, Math.random() * 24);

const f3 = () =>
  setTimeout(() => {
    console.log(3);
  }, Math.random() * 24);

f1();
f2();
f3();

*/
// ЕСТЬ ТРИ ПРОМИСА, И КАЖДЫЙ СРАБАТЫВАЕТ ЧЕРЕЗ РАНДОМНОЕ ВРЕМЯ. НУЖНО ЧТОБЫ ОНИ СРАБОТАЛИ В ПОРЯДКЕ ОЧЕРЕДИ

// РЕШЕНИЕ
const g1 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(1);
    }, Math.random() * 24)
  );

const g2 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(2);
    }, Math.random() * 24)
  );

const g3 = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(3);
    }, Math.random() * 24)
  );

g1().then(console.log).then(g2).then(console.log).then(g3).then(console.log);
