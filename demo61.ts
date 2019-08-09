function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    return typeof x === 'number' ? Number(x.toString().split('').reverse().join('')) : x.split('').reverse().join('');
}
console.log(reverse('hello'))
console.log(reverse(123))