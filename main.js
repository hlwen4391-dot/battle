class Character {
    constructor(name, hp, attack, defense) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
    }


    attackTarget(taeget) {
        const damage = Math.max(this.attack - taeget.defense, 1);//攻击-防御=伤害
        taeget.hp -= damage;//伤害-血量=剩余血量

        console.log(`${this.name}对${taeget.name}造成了${damage}点伤害`)//打印攻击信息
        console.log(`${taeget.name}剩余HP:${taeget.hp}`)//打印剩余血量
    }
}

const hero = new Character("英雄", 100, 10, 5); //fixme 
const monster = new Character("怪物", 150, 2, 4); //fixme 

hero.attackTarget(monster);

monster.attackTarget(hero);

console.log("战斗开始！")

//  while(true){
//     if
//  }