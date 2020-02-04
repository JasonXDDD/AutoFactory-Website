function sendPLCData(plc){
  $.ajax({
    url: GAS_URL,
    type: "POST",
    data: plc,

    success: function(response) {
      if(response == "成功"){
        alert("成功");
      }
    },
  });
}


// run post gas

var sendInterval
let a = 0

function startSend(){
  sendInterval = window.setInterval(() => {
    sendPLCData({
      nowStopTime: a,
      activeRate: a,
      startUpTime: a,
      produceStartTime: a,
      runTime: a,
      restTime: a,
      stopTime: a,
      targetCount: a,
      nowCount: a,
      averageSpeedRate: a,
      timeLeft: a,
      now: moment().format('YYYY-MM-DD HH:mm:ss')
    })
    a ++;
  }, 500);  

}

startSend()

