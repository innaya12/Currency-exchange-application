export function getYesterdaysDate() {
    let date = new Date();
    date.setDate(date.getDate()-1);
    return (date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear()).split('/').reverse().join('-');
}