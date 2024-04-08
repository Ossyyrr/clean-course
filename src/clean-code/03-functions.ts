(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCastById(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(id: string) {
    console.log({ ActorId: id });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string): boolean {
    if (fullName === "fernando") return false;
    console.log("Crear actor");
    return true;
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    return checkFullName(fullName);
  }
})();

const getPayAmount = ({
  isDead = false,
  isSeparated = true,
  isRetired = false,
}) => {
  let result;
  if (isDead) {
    result = 1500;
  } else {
    if (isSeparated) {
      result = 2500;
    } else {
      if (isRetired) {
        result = 3000;
      } else {
        result = 4000;
      }
    }
  }

  return result;
};
