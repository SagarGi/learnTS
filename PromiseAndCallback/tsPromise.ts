// promise -> pending when created, fulfilled when resolved and when error it is rejeced

// example
import axios from "axios";

const fetch = axios.create();

interface Data {
  userId?: number;
  id?: number;
  title?: string;
  completed?: boolean;
}

let obj: Data = {};

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // console.log(response.data);

    return response.data;
  })
  .then((result) => {
    obj = result;
    console.log(obj);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("END of the promise!!!"));
