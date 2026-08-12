import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'

const a = dayjs()
const b = a.add(5, 'day')

console.log(dayjs(b).format('MMM, D'))

const c = dayjs()
const d = c.add(1, 'month')

console.log(dayjs(d).format('MMM, D'))

const e = dayjs()
const f = e.subtract(1, 'month')

console.log(dayjs(f).format('MMM, D'))

const dayWeek = dayjs()
console.log(dayWeek.format('dddd'))

function isWeekend(date) {
    const dayOfWeek = date.format('dddd');
    return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

let date = dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));
