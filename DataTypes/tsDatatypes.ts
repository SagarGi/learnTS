//  Data types used is
//  number, boolean , string, void, null , undefined

// var or let can be used

// defining a variable with datatypes
let a_number: number;

// initialization

let b_number: number = 10;

// console.log(b_number);

let c_string: string = "sagar";

let d_boolean: boolean = true;

let e_null: null = null;

let f_undefined: undefined = undefined;

// universal supertype
let g_variablename: any = "sagar";

let f_variablename: unknown = 10;

let h: number = g_variablename;

// unknown is safer version of any
// let i: string = f_variablename;

// console.log(h);

let uninon_variable: null | number | string;

uninon_variable = "sagar";

// #### Array

const array: string[] = ["sagar", "javascript"];
array.push("milan");
