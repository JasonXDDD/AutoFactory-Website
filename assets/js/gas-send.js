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
    sendPLCData(format)
    a ++;
  }, 500);  

}

startSend()

