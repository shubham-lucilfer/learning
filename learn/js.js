// class LRU {
//     constructor(max = 3) {
//         this.max = max;
//         this.cache = new Map();
//     }

//     get(key) {
//         let item = this.cache.get(key);
//         if (item) {
//             this.cache.delete(key);
//             this.cache.set(key, item);
//         }
//         return item;
//     }
//     set(key, value) {
//         if (this.cache.has(key)) {
//             this.cache.delete(key);
//         } else if (this.cache.size == this.max) {
//             this.cache.delete(this.first());
//         }
//         this.cache.set(key, value);
//     }

//     first() {
//         return this.cache.keys().next().value;
//     }

// }


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   const lydia = new Person('Lydia', 'Hallie');
//   const sarah = Person('Sarah', 'Smith');

//   console.log(lydia);
//   console.log(global.firstName);

let config = {
    alert: setInterval(() => {
      console.log('Alert!');
    }, 1000),
  };
  
  config = null;