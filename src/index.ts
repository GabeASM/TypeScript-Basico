let mensaje: string = "hola mundo";
mensaje = "adios mundo";

console.log(typeof []);

let hola = "hola mundo";

let extincionDeLosDinosaurios: number = 76_000_000;
let dinosaurioFav: string = "T-Rex";
let extintos = true;

let mivariable;
mivariable = "chanchito feliz";
mivariable = 42;

function holaMundo(config: boolean) {
  config = false;

  return config;
}

holaMundo(extintos);

let animales: string[] = ["chanchito", "feliz", "felipe"];
let nums: number[] = [1, 2, 3, 41, 2, 3, 4];
let checks: boolean[] = [];
let nums2: Array<number> = [];

// nums.map(x => x.) el autocompletado sugiere metodos del tipo de datos

let tupla: [number[], string[]] = [[2], ["chanchito feliz"]];

const chica = "s";
const mediana = "m";
const grande = "l";
const extragrande = "xl";

enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = " l",
  ExtraGrande = "xl",
}

const variable1 = Talla.Chica;
console.log(variable1);

const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}

const estado = LoadingState.Success;

const objeto: {
  readonly id: number;
  nombre?: string;
  talla: Talla;
} = {
  id: 1,
  nombre: "Hola mundo",
  talla: Talla.Chica,
};

function suma(numero1: number, numero2: number) {
  return numero1 + numero2;
}

//  ############# functions #############

// funcion que retorna un void
// podemos escribir explicitamente que retorna un void o no escribir nada
// pero siempre es recomendable escribir que retorna una funcion
function imprimirHola(): void {
  console.log("hola");
}

// ejemplo de una funcion que retorna una multiplicacion y TS infiere el tipo de retorno
function multiplicar(num1: number, num2: number) {
  return num1 * num2;
}

// ejemplo de funcion con parametros opcionales
// en este caso c un parametro opcional
// en caso de no que haya c en la llamada de la funcion, sumamos un parametro opcional que es el 0
function sumar(a: number, b: number, c?: number): number {
  return a + b + (c || 0);
}
// ejemplo de funcion con parametro definido
function elevar(numero: number, exponente: number = 10): number {
  return numero ** exponente;
}

// ejemplo de funcion con parametro de objeto destructurado
function dividir({
  dividendo,
  divisor,
}: {
  dividendo: number;
  divisor: number;
}): number {
  return dividendo / divisor;
}

// funcion que recibe dos parametros pero puede recibir mas
function sumar2(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}

// ############# Clases #############
class Persona {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
}

interface Area {
  getArea: () => number;
}

class Rectangulo implements Area {
  private largo: number;
  private ancho: number;

  public constructor(largo: number, ancho: number) {
    this.ancho = ancho;
    this.largo = largo;
  }

  public getArea(): number {
    return this.ancho * this.largo;
  }

}

class Cuadrado extends Rectangulo{
  public constructor( ancho : number){
    super(ancho , ancho)
  }
}
