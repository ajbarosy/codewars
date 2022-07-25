//Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.



  function towerBuilder(nFloors){
    let tower = [];
    for (let i = 0; i < nFloors; i++){
        tower.push(' '.repeat(nFloors - i - 1) + '*'.repeat((i * 2) - 1) + ' '.repeat(nFloors - i - 1));
    }
    return tower;
  }