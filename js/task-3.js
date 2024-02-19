class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    this.#value = this.#value.padEnd(str.length + this.#value.length, str);
  }
  padStart(str) {
    this.#value = this.#value.padStart(str.length + this.#value.length, str);
  }
  padBoth(str) {
    this.#value = this.#value.padStart(str.length + this.#value.length, str);
    this.#value = this.#value.padEnd(str.length + this.#value.length, str);
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
