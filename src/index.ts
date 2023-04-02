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
  talla : Talla
} = {
  id: 1,
  nombre: "Hola mundo",
  talla : Talla.Chica
};

function suma (numero1 : number , numero2 : number){
    return numero1+numero2
}

class miClase{
    private miAtributo?: string
    private miSegundoAtributo? :number

    
}