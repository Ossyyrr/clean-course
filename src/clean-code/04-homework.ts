(() => {
  // CONSOLA DEL NAVEGADOR

  // Resolver sin la triple condicional dentro del if
  // includes? arrays?

  const fruitsByColor: Record<string, string[]> = {
    red: ["cereza", "ciruela", "manzana", "fresa"],
    yellow: ["piña", "banana"],
    purple: ["moras", "uvas"],
  };

  function isRedFruit(fruit: string): boolean {
    return fruitsByColor["red"].includes(fruit);
  }

  // Simplificar esta función
  // switch? Object literal? validar posibles colores

  function getFruitsByColor(color: string): string[] {
    // if (color === "red") {
    //   return ["manzana", "fresa"];
    // } else if (color === "yellow") {
    //   return ["piña", "banana"];
    // } else if (color === "purple") {
    //   return ["moras", "uvas"];
    // } else {
    //   throw Error("the color must be: red, yellow, purple");
    // }

    if (!Object.keys(fruitsByColor).includes(color))
      throw Error("the color must be: red, yellow, purple");

    return fruitsByColor[color] || [];
  }

  // Simplificar esta función
  let isFirstStep = true;
  let isSecondStep = true;
  let isThirdStep = true;
  let isFourthStep = true;

  function workingSteps() {
    // if (isFirstStep === true) {
    //   if (isSecondStep === true) {
    //     if (isThirdStep === true) {
    //       if (isFourthStep === true) {
    //         return "Working properly!";
    //       } else {
    //         return "Fourth step broken.";
    //       }
    //     } else {
    //       return "Third step broken.";
    //     }
    //   } else {
    //     return "Second step broken.";
    //   }
    // } else {
    //   return "First step broken.";
    // }
    if (!isFirstStep) return "First step broken.";
    if (!isSecondStep) return "Second step broken.";
    if (!isThirdStep) return "Third step broken.";
    if (!isFourthStep) return "Fourth step broken.";

    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cereza"), fruit: "cereza" }); // true
  console.log({ isRedFruit: isRedFruit("piña"), fruit: "piña" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['manzana', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['piña', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
