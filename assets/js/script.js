
function readTextFile (file) {
  var rawFile = new XMLHttpRequest()
  rawFile.open('GET', file, false)
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        var allText = rawFile.responseText
        // console.log(allText)
        formatData(allText)
      }
    }
  }
  rawFile.send(null)
}

// readTextFile('./test.txt');
let format = {
  nowStopTime: 0,
  activeRate: 0,
  startUpTime: 0,
  produceStartTime: 0,
  runTime: 0,
  restTime: 0,
  stopTime: 0,
  targetCount: 0,
  nowCount: 0,
  averageSpeedRate: 0,
  timeLeft: 0,
  now: 0
}

function formatData(data){
  let tmp = data.split(' ')
  format = {
    nowStopTime: tmp[0],
    activeRate: tmp[1],
    startUpTime: tmp[2],
    produceStartTime: tmp[3],
    runTime: tmp[4],
    restTime: tmp[5],
    stopTime: tmp[6],
    targetCount: tmp[7],
    nowCount: tmp[8],
    averageSpeedRate: tmp[9],
    timeLeft: tmp[10],
    now: moment().format('YYYY-MM-DD HH:mm:ss')
  }
}


// run get Data

var fileInterval
function startGetFile(){
  fileInterval = window.setInterval(() => {
    readTextFile('./test.txt')
  }, 100);  
}

startGetFile()