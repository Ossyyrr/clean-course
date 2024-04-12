interface Bird {
  eat(): void;
}

interface FliyingBird {
  fly(): void;
}
interface RunningBird {
  run(): void;
}
interface SwimmerBird {
  swim(): void;
}

class Tucan implements Bird, FliyingBird {
  public eat() {}
  public fly() {}
}

class Humminbird implements Bird, FliyingBird {
  public eat() {}
  public fly() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements Bird, SwimmerBird {
  public eat() {}
  public swim() {}
}
