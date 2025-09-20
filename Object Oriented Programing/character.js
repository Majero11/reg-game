// Implement an RPG game with characters that can be heroes or monsters. Characters have some stats for health and attack. Heros have to defeat monsters and viceversa.
//Create at least 2 clases: 1 for heroes, 1 for monsters. each class has at least 2 properties: health and attck 
// each class has an attack method 



//step 1. Create a short description of what you want to do 
//step 2. write a plan for each class 
// step 3. code 
// step 4. test(optional)
// step 5. prepare to present 

//Description 
// Create a class for heros and monsters. Health should have a default value of 100 for both and attack 0. Both classes will have an attack method that reduces health by 10 every time the method is called. The hero class will also have a magic protion method that restores health by  and returns a message that gives you your health level. 

class Monster {
  health;
  attackPower;
  monster;

  constructor (name, health = 100, attackPower = 10){
    this.monster = name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(hero){
    hero.health -= this.attackPower;
    if(hero.health > 0){
    return "Hero's health is now  " + hero.health;
    }
    else{
      return "The Hero has been defeated"
    }
  }

}

class Hero {
  health;
  attackPower;
  hero; 

  constructor (Name, health = 100, attackPower = 10){
    this.hero = Name;
    this.health = health;
    this.attackPower = attackPower;
  }

  attack(monster){
    monster.health -= this.attackPower;
    if(monster.health > 0){
    return "monster's health is now  " + monster.health;
    }
    else{
      return "The monster has been defeated"
    }
  }

  magicPortion(Power){
    this.health += Power
    if(this.health > 100){
      this.health = 100;
      return "Your health is now " + this.health;
    }
    else{
    return "Your health is now " + this.health
    }
  }

}

const Spiderman = new Hero("Sue", 100, 30);
const Lion = new Monster("Cloudy", 100, 10)

console.log(Spiderman.attack(Lion))
console.log(Lion.attack(Spiderman))
console.log(Spiderman.magicPortion(20))
console.log(Lion.health)
