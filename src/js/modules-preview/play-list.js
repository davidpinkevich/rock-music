export function createList(n){
  let array =[];
  let a = Math.sqrt(n);
  let b = Math.sqrt(n);

  for(let i = 0; i < a; i++){
    for (let n = 0; n < b; n++){
      let arr = [i, n];
      array.push(arr);
    }
  }
  return array;
}