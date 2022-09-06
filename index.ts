const commands = ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"];
const values = [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]];

class MyHashMap {
  put(key: number, value: number): void {
    this[key] = value;

    return null;
  }

  get(key: number): number {
    return this[key] === undefined
      ? -1
      : this[key];
  }

  remove(key: number): void {
    delete this[key];

    return null;
  }
}

function hashRunner(commands: string[], values: number[][]) {
  const length = commands.length;
  let instance;

  for (let i = 0; i < length; i++) {
    if (!instance) {
      instance = new MyHashMap();

      console.log(null);

      continue;
    }

    console.log(
      commands[i] === 'get' || commands[i] === 'remove'
        ? instance[commands[i]](values[i][0])
        : instance[commands[i]](values[i][0], values[i][1])
    );
  }
}

hashRunner(commands, values);
