const text = "ข้าวหน้าหมูสันคอด้ง (Butadon)\nรสเผ็ด x 1"
if (/\r|\n/.exec(text)) {
	console.log('yes')
}
const rowIdMenuMap = new Map();
rowIdMenuMap.set('1','ข้าวหน้าหมูสันคอด้ง (Butadon)-รสเผ็ด x 1-150g x 1');

console.log(rowIdMenuMap.get('1'))
const label = "\"วันที่ชำระเงิน\",\"เวลาที่ชำระเงิน\""
console.log(label.replace(/"/g,''))