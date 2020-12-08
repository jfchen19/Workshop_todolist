// TO DO
// 新增/移除 checked class，只有第一個li有動作
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul li').addEventListener('click', addCheck())
})

function addCheck(){
  let row = document.querySelectorAll('ul li')
  for (let i=0; i<row.length; i++){
    row[i].addEventListener('click', function() {
      row[i].classList.toggle("checked")
    })
  }
}









//  點擊Ｘ刪除任務
document.addEventListener('DOMContentLoaded', function() {

})








// ＋
// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector('.addBtn').addEventListener('click', function() {
//     document.querySelector('ul').addEventListener('beforeend', addRow())
//   })
// })

// function addRow() {
//   let div = document.createElement('div')
//   div.
// }