/* Задание 1 */
// let a = 'hello';
// let b = 'Ivan';
// console.log(a + ' ' + b);

// Output: hello Ivan

/* Задание 2 */
// let a = 'lorem ipsum dolor sit amet';
// let b = a.length;
// console.log(b)

// Output: 26

/* Задание 3 */
// let a = 'children';
// let b = a.slice(0, 7).toUpperCase();
// let c = a.slice(-1).toLowerCase();
// console.log(b + c);

// Output: CHILDREn

/* Задание 4 */
// let a = 'boss';
// let b = a.slice(2);
// let c = a.slice(1, -2)
// let d = a.slice(0, -3)
// console.log(d + b + c )

// Output: bsso

/* Задание 5 */
// let a = 'sunday';
// let b = a.indexOf('d');
// console.log(b)

// Output: 3

/* Задание 6 */
// let a = 'hello';
// let b = a.slice(0, -3);
// let c = a.slice(-1);
// let d = 'ks';
// console.log(b + d + c)

// Output: hekso

// Это все на слайсах, но если хотите сделать проще то...

// let a = 'hello';
// let b = a.replace('ll', 'ks')

// console.log(b);

/* Задание 7 */
// let a = 'user';
// let b = 'new';
// let c = a.slice(0, 2);
// console.log(b + ' ' + c)

// Output: new us

/* Задание 8 */
// let a = 'monday';
// let b = 'day';
// let c = a.slice(3);
// let d = a.slice(0, 3)
// console.log(b + c + d)

// Output: daydaymon

/* Задание 9 */
// let a = 'HELLO';
// let b = a.slice(0, -4).toLowerCase();
// let c = a.slice(2, -2).toLowerCase();
// let d = a.slice(-1).toLowerCase();
// let e = a.slice(1, -3);
// let f = a.slice(2, -2)
// console.log(b + e + c + f + d)

// Output: hElLo

/* Задание 10 */
// let a = 5;
// let b = '400';
// let c = b[0] + a;
// let d = b[2];
// console.log(c + d)

// Output: 450 (хардкор)

// let a = 5;
// let b = '400';
// let c = b.slice(0, -2) // 4
// let e = b.slice(2); // 0 last
// console.log(c + a + e)

// Output: 450 (слайсы)

/* Задание 11 */
// let a = 'monkey';
// let b = 'banana';
// let c = a.slice(0, -5);
// let d = a.slice(3, -2);
// let e = b.slice(1, -2)
// console.log(c + e + d);

// Output: manak