function doDebug(){
  var Result = doPost({
    parameter: {
      nowStopTime: '11:11',
      activeRate: '11:11',
      startUpTime: '11:11',
      produceStartTime: '11:11',
      runTime: '11:11',
      restTime: '11:11',
      stopTime: '11:11',
      targetCount: '11:11',
      nowCount: '11:11',
      averageSpeedRate: '11:11',
      timeLeft: '11:11',
      now: new Date()
    }
  });

  Logger.log("Result: %s" , Result);
}