(() => {
  type Gender = "M" | "F";

  class Person {
    //!  Aplicando el principio de responsabilidad unica

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

  //   const person = new Person("John Doe", "M", new Date("1990-01-01"));
  //   console.log(person);

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      name: string,
      gender: Gender,
      birthdate: Date,
      email: string,
      role: string
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "C:/Users/JohnDoe",
    "C:/Users/JohnDoe/Documents",
    "John Doe",
    "M",
    new Date("1990-01-01"),
    "ossyyrr@gmail.com",
    "M"
  );

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
