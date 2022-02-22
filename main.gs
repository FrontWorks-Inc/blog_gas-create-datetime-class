'use strick'

function myFunction() {

  const dt = new Datetime('2022/02/22');
  console.log(dt);  //	{ date: Tue Feb 22 2022 00:00:00 GMT+0900 (Japan Standard Time) }

  console.log(dt.getMonth());  // 2

  dt.setMonth(5);
  console.log(dt.toString());  // 2022/05/22 00:00:00

  const date1 = new Date('2022/05/22');
  console.log(dt.isSame(date1));  // true

  console.log(Datetime.format(date1, 'yyyy/MM/dd'));  // 2022/05/22

  const date2 = new Date('2022/02/22');
  console.log(dt.isSame(date2));  // false

  console.log(dt.isSame(date2, 'yyyy'))  // true NOTE: 年 (4 桁) 部分を比較

}