class Developer {
    constructor(name, health = 50, iq){
        this.name = name;
        this.languages = ["Python", "Javascript", "Java", "C#"]
        this.health = health;
        this.iq = iq;
    }
    sleep(){
        console.log("Zzzz")
        this.iq += 5;
        this.health += 10;
        return this;
    }

    completedProjects(title){
        console.log(`${this.name} completed a project named ${title}`)
            this.iq += 5;
            this.health -= 5;
            this.languages.push(`${title}`)
            return this
    }
}

const dev1 = new Developer("Ruben", 20, 5)
const dev2 = new Developer("Kevin", 10, 5)

// console.log(dev1)
// dev1.sleep()
// dev1.completedProjects("Crypto API")
// console.log(dev1)

console.log(dev2)
dev2.completedProjects("API")
console.log(dev2)