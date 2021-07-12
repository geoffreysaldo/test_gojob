function closestToZero(arr){
  if(arr == null || arr.length == 0){ // si l'entrée est null ou vide, on renvoie 0
    return 0
  }
  else {
    current_nearest = null; // variable pour stocker l'élement le plus proche de 0
    for(i=0; i<arr.length; i++){
      if(current_nearest ==  null){ // iniatilisation de la variable avec le premier élement du tableau
        current_nearest = arr[i]
      }
      else {
        if(Math.abs(arr[i]) < Math.abs(current_nearest)){ // on compare les valeurs absolues pour savoir quel élement est le plus proche de 0
          current_nearest = arr[i]
        }
        else if(Math.abs(arr[i]) == Math.abs(current_nearest)){ // en cas d'égalité des valeurs absolues, si l'élément courant est plus grand que le plus proche actuel, alors on l'actualise
          if(arr[i] > current_nearest){
            current_nearest = arr[i]
          }
        }
      }
    }
    console.log(current_nearest);
    return current_nearest
  }
}

module.exports = closestToZero;


