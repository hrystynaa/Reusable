'use strict';

const fn = () => {
  const obj1 = { name: 'Hrystyna' };
  let obj2 = { name: 'Hope' };
  obj1.name = 'Mary';
  obj2.name = 'Kate';
  obj2 = { name: 'Marcus' };
  console.log(obj1, obj2);
};

module.exports = { fn };
