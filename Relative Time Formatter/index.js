const rtf = new Intl.RelativeTimeFormat(
    'en',               // locale
    { numeric: 'auto' } // options
);

console.log(rtf.format(1 /* value */, 'day' /* unit */)); // tomorrow
console.log(rtf.format(-1 /* value */, 'day' /* unit */)); // yesterday
console.log(rtf.format(2 /* value */, 'day' /* unit */)); // in 2 days
console.log(rtf.format(-2 /* value */, 'day' /* unit */)); // 2 days ago