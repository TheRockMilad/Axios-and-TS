class namedValue<N, V> {
  private _value?: V;
  constructor(private name: N) {}

  public setValue(value: V) {
    this._value = value;
  }

  public getValue(): V | undefined {
    return this._value;
  }

  public toString() {
    return `${this.name}: ${this._value}`;
  }
}

const c1 = new namedValue<string, string>("Boss");
c1.setValue("milad");
console.log(c1.toString());
