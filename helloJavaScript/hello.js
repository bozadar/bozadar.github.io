let monsters = {          

    titles: ['Goblin','Orc', 'Ogre', 'Wraith', 'Skeleton'], 

    pickMonster () {        
        let monsterPick = Math.floor(Math.random() * this.titles.length);
        return this.titles[monsterPick];
    },

    attack () {
        let atkDmg = Math.floor(Math.random() * 7);
        if (atkDmg === 0) {
            return 'misses and does 0'
        }
        return `does ${atkDmg}`;
    }
}

console.log(`${monsters.pickMonster()} ${monsters.attack()} damage!`)



