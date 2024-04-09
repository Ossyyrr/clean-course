(() => {
  type Gender = "M" | "F";

  class Person {
    //! No aplicando el principio de responsabilidad unica

    // private name: string;
    // private gender: Gender;
    // private birthdate: Date;

    // constructor(name: string, gender: Gender, birthdate: Date) {
    //   this.name = name;
    //   this.birthdate = birthdate;
    //   this.gender = gender;
    // }

    //! FORMA RESUMIDA DE ESCRIBIR LO DE ARRIBA

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  const person = new Person("John Doe", "M", new Date("1990-01-01"));
  console.log(person);
})();
