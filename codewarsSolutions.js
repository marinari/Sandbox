function isValidWalk(walk) {
  //define x and y coordinates x for horizontal movement y for vertical movement
  let y = 0;
  let x = 0;
  walk.forEach(function(dir) {
  if (dir === 'n') {
   //increment or decrement x and y for opposite movements
    y = y + 1;
  }
  if (dir === 's'){
    y = y - 1;
  }
  if (dir === 'e'){
    x = x + 1;
  }
  if (dir === 'w'){
    x = x - 1;
  }   
  });  
  
  if(walk.length === 10 && y ===0 && x ===0){
  return true;
  }
  else {
  return false;
  }
