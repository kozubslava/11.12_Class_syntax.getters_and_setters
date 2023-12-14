// зробити клас Employee (співробітник)

// у співробітника має бути
// ім'я
// прізвище
// стать
// скількі йому платять за годину (ставка)
// скількі годин в цьому місяці він пропрацював

// зробити метод, який каже скількі співробітнику потрібно заплатити за цей місяць

// зробити геттери і сеттери для властивостей співоробітника щоб у них не можна було передати зовсім погані дані (пусті рядки. неправильни типи даних і т.д)

// Bonus task
// для ім'я з прізвищем мають окремо бути спільні геттери та сеттери (одночасно задається і ім'я і прізвище)

class Employee {
  constructor(name, surname, gender, rate, workHours) {
    if (typeof name !== "string" || name === "") {
      throw new TypeError("Назва має бути не пустим рядком");
    }

    this._name = name;
    this._surname = surname;
    this.gender = gender;
    this.rate = rate;
    this.workHours = workHours;
  }
  salary() {
    return `Salary ${this._surname} ${this._name}: ${
      this.rate * this.workHours
    }$`;
  }

  get fullName() {
    return `${this._name} ${this._surname}`;
  }

  set fullName(newName) {
     // trim - забирає зайві пробіли по краям
    if (typeof newName !== "string" || newName.trim() === "") {
      throw new TypeError("Назва має бути не пустим рядком й не містити цифри");
    }
    const fullNameArr = newName.trim().split(" ");
    if (fullNameArr.length > 1) {
      this._name = fullNameArr[0];
      this._surname = fullNameArr[1];
    } else {
      throw new TypeError("вкажіть імя та прізвище");
    }
  }
}

const employee1 = new Employee("Slava", `Kozub`, "male", 3, 20);

console.log(employee1.salary());
console.log(employee1._name);
employee1.fullName = "Petro Petrov";
console.log(employee1.fullName);
console.log(employee1.salary());


// class Employee {
//   constructor(name, surname, gender, rate, workHours) {
//     // if (typeof name !== "string" || name === "") {
//     //   throw new TypeError("Назва має бути не пустим рядком");
//     // }
//     this._name = name;
//     this._surname = surname;
//     this.gender = gender;
//     this.rate = rate;
//     this.workHours = workHours;
//   }
//   salary() {
//     return `Salary ${this._surname} ${this._name}: ${
//       this.rate * this.workHours
//     }$`;
//   }
//   get fullName() {
//     return `${this._name} ${this._surname}`;
// }

//   set fullName (newName) {
//     if (typeof newName !== "string" || newName === "") {
//             throw new TypeError("Назва має бути не пустим рядком");
//           }
//           return (this._name = newName);
//     }
// }

// const employee1 = new Employee(" ", 5, "male", 3, 20);

// console.log(employee1.salary());
// console.log(employee1._name);
// employee1.name = "jhj";
