

function getPLCData(){
  $.ajax({
    url: GAS_URL,
    type: "GET",

    success: function(response) {
      setValue(response)
      // console.log(response)
      // a = response
    },
  });
}

function setValue(data){
  nowStopTime.innerHTML = data.nowStopTime
  activeRate.innerHTML = data.activeRate
  startUpTime.innerHTML = data.startUpTime
  produceStartTime.innerHTML = data.produceStartTime
  runTime.innerHTML = data.runTime
  restTime.innerHTML = data.restTime
  stopTime.innerHTML = data.stopTime
  targetCount.innerHTML = data.targetCount
  nowCount.innerHTML = data.nowCount
  averageSpeedRate.innerHTML = data.averageSpeedRate
  timeLeft.innerHTML = data.timeLeft
  now.innerHTML = moment(data.now).format('YYYY-MM-DD HH:mm:ss')
}

// run get gas

var getInterval

function startGet(){
  getInterval = window.setInterval(() => {
    getPLCData()
  }, 500);  
}

startGet()