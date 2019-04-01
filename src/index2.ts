import { Person } from './person.interface';

// const alo: Person = { name: 'alo' };

// function addPhone(phone: number) {
//   return function(person: Person) {
//     return {
//       phone: phone,
//       name: person.name
//     };
//   };
// }

// const newAlo = addPhone(600092666)(alo);

// console.log(newAlo);

 // Example Decorator

function addMainSkill(skill: string){
  return function(tarjetClass){
    return class {
      name = new tarjetClass().name;
      skill = skill || 'javascript';
    }
  }
}

@addMainSkill('js')
class Developer {
  name = 'alo';
}

console.log(new Developer());
