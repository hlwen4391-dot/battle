class Character {
    constructor(name, hp, attack, defense) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
    }//定义角色属性


    attackTarget(target) {
        const damage = Math.max(this.attack - target.defense, 1);//攻击-防御=伤害
        target.hp -= damage;//血量-伤害=剩余血量

        console.log(`${this.name}对${target.name}造成了${damage}点伤害`)//打印攻击信息
        console.log(`${target.name}剩余HP:${target.hp}`)//打印剩余血量
    }//attackTarget方法用来攻击目标角色


    isDead() {
        return this.hp <= 0;
    }//Character 类的实例方法用来判断角色是否死亡

}

const hero = new Character("英雄", 100, 10, 5); //hero的实例化

class Monster extends Character {
    constructor(name, hp, attack, defense) {
        super(name, hp,
            attack, defense);
        this.miss = 0.99; //怪物攻击有30%的概率miss
    }
    attackTarget(target) {
        const random = Math.random();
        console.log(`${this.name}攻击${target.name}的概率为${random}`);
        if (random < this.miss) {
            console.log(`${this.name}攻击${target.name}失败！`);
            return;
        }
        super.attackTarget(target);
    }
}

const monster = new Monster("怪物", 150, 20, 8); //monster的实例化


console.log("战斗开始！")

hero.attackTarget(monster);//英雄攻击怪物

monster.attackTarget(hero);//怪物攻击英雄



while (true) {
    hero.attackTarget(monster);

    if (monster.isDead()) {
        console.log("战斗结束，怪物死亡，英雄胜利！");
        break;
    }
    monster.attackTarget(hero);
    if (hero.isDead()) {
        console.log("战斗结束，英雄死亡，怪物胜利！");
        break;
    }
    //回合制循环，直到一方死亡

}