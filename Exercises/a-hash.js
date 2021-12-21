'use strict';

const phonebook = {
  Hrystyna: { phone: '+380684393098' },
  Nadya: { phone: '+380971271308' },
  Sonya: { phone: '+380964534089' },
  Vika: { phone: '+380684539075' },
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };
