// TO DO
// 新增/移除 checked class，只有第一個li有動作
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul li').addEventListener('click', function() {
    const li = document.querySelector('ul li').classList.toggle('checked')
  })
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