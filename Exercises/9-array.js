'use strict';

const phonebook = [
  { name: 'Hrystyna', phone: '+380684393098' },
  { name: 'Nadya', phone: '+380971271308' },
  { name: 'Sonya', phone: '+380964534089' },
  { name: 'Vika', phone: '+380684539075' },
];

const findPhoneByName = (name) => {
  for (const pers of phonebook) {
    if (pers.name === name) return pers.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
