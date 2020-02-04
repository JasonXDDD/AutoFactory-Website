let now = $('#now')[0]

let nowStopTime = $('#now-stop-time')[0] // 現在停機時間
let activeRate = $('#active-rate')[0] // 稼動率
let startUpTime = $('#start-up-time')[0] // 開機時間
let produceStartTime = $('#produce-start-time')[0] // 開始生產時間
let runTime = $('#run-time')[0] // 運轉
let restTime = $('#rest-time')[0] // 休息
let stopTime = $('#stop-time')[0] // 停機
let targetCount = $('#target-count')[0] // 計畫產量
let nowCount = $('#now-count')[0] // 目前產量
let averageSpeedRate = $('#average-speed-rate')[0] // 平均速率
let timeLeft = $('#time-left')[0] // 剩餘時間

function readTextFile (file) {
  var rawFile = new XMLHttpRequest()
  rawFile.open('GET', file, false)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText
        // console.log(allText)
        setValue(allText)
      }
    }
  }
  rawFile.send(null)
}

// readTextFile('./test.txt');

function setValue(data){
  nowStopTime.innerHTML = data
  activeRate.innerHTML = data
  startUpTime.innerHTML = data
  produceStartTime.innerHTML = data
  runTime.innerHTML = data
  restTime.innerHTML = data
  stopTime.innerHTML = data
  targetCount.innerHTML = data
  nowCount.innerHTML = data
  averageSpeedRate.innerHTML = data
  timeLeft.innerHTML = data
}


// run get Data

var interval
function start(){
  interval = window.setInterval(() => {
    readTextFile('./test.txt')
    now.innerHTML = moment().format('YYYY-MM-DD HH:mm:ss')
  }, 100);  
}

// start()