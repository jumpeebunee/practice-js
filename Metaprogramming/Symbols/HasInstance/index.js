const int255 = {
  [Symbol.hasInstance](value) {
    return value && value <= 255 && value >= 0;
  },
};

console.log(322 instanceof int255);
