let imgs = Array.from(document.querySelectorAll('.item img'))
let outerBox = document.getElementById('outerBox')
let innerBox = document.getElementById('innerBox')
let close = document.getElementById('close')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let currentIndex = 0

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function (eventInfo) {
    console.log(i)
    outerBox.style.display = 'flex'
    let imgSrc = eventInfo.target.getAttribute('src')
    innerBox.style.backgroundImage = `url(${imgSrc})`
    currentIndex = imgs.indexOf(eventInfo.target)
  })
}
next.addEventListener('click', nextElement)
function nextElement() {
  currentIndex++

  if (currentIndex == imgs.length) {
    currentIndex = 0
  }

  let imgSrc = imgs[currentIndex].getAttribute('src')

  innerBox.style.backgroundImage = `url(${imgSrc})`
  console.log(currentIndex)
}
prev.addEventListener('click', preiose)
function preiose() {
  currentIndex--
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1
  }

  let imgSrc = imgs[currentIndex].getAttribute('src')

  innerBox.style.backgroundImage = `url(${imgSrc})`
  console.log(currentIndex)
}
close.addEventListener('click', function (info) {
  outerBox.style.display = 'none'
})
// for (var i = 0; i < imgs.length; i++) {
//   imgs[i].addEventListener('click', function (event) {
//     currentIndex = imgs.indexOf(event.target)
//     let imgSrs = event.target.getAttribute('src')
//     innerBox.style.backgroundImage = `url(${imgSrs})`
//     outerBox.style.display = 'flex'
//   })
// }
// next.addEventListener("click", nextElement);
// function nextElement()
// {
//     currentIndex++;
//     if (currentIndex == imgs.length)
//     {
//         currentIndex=0
//     }
//     var imgSrs = imgs[currentIndex].getAttribute("src")
//     innerBox.style.backgroundImage=`url(${imgSrs})`
// }
