import { Person } from './guy.interface';

class TbbT {
  tbbtGuys: Person[];

  constructor() {
    this.tbbtGuys = [
      {
        nombre: 'Sheldon',
        edad: 40
      },
      {
        nombre: 'Penny',
        edad: 30
      }
    ];
  }

  addGuy(guy: Person) {
    // this.tbbtGuys.push(guy);
    this.tbbtGuys = [...this.tbbtGuys, guy];
  }

  removeGuy(guy: Person) {
    // this.tbbtGuys = this.tbbtGuys.filter(tbbtGuy => {
    //   return tbbtGuy !== guy;
    // });

    this.tbbtGuys.filter(tbbtGuy => {
      return tbbtGuy.nombre !== guy.nombre;
    });
  }

  mostrar() {
    // this.tbbtGuys.map(guy => console.log(`Este es ${guy}`));

    this.tbbtGuys.map(guy => {
      console.log(`Este es ${guy.nombre}`);
    });
  }
}

let t = new TbbT();
t.addGuy({
  nombre: 'Leonard',
  edad: 38
});
t.removeGuy({
  nombre: 'Leonard',
  edad: 38
});
t.mostrar();
