function doPost (e) {
  var params = e.parameter

  var nowStopTime = params.nowStopTime // 現在停機時間
  var activeRate = params.activeRate // 稼動率
  var startUpTime = params.startUpTime // 開機時間
  var produceStartTime = params.produceStartTime // 開始生產時間
  var runTime = params.runTime // 運轉
  var restTime = params.restTime // 休息
  var stopTime = params.stopTime // 停機
  var targetCount = params.targetCount // 計畫產量
  var nowCount = params.nowCount // 目前產量
  var averageSpeedRate = params.averageSpeedRate // 平均速率
  var timeLeft = params.timeLeft // 剩餘時間
  var now = params.now

  var SpreadSheet = SpreadsheetApp.openById(
    '1kxYmwP3txX_HChjpiQ1-brcBnIYYX2661CE6p6Z_SKE'
  )
  var Sheet = SpreadSheet.getSheets()[0]
  var LastRow = Sheet.getLastRow()

  if (now !== undefined) {
    Sheet.getRange(LastRow, 1).setValue(nowStopTime)
    Sheet.getRange(LastRow, 2).setValue(activeRate)
    Sheet.getRange(LastRow, 3).setValue(startUpTime)
    Sheet.getRange(LastRow, 4).setValue(produceStartTime)
    Sheet.getRange(LastRow, 5).setValue(runTime)
    Sheet.getRange(LastRow, 6).setValue(restTime)
    Sheet.getRange(LastRow, 7).setValue(stopTime)
    Sheet.getRange(LastRow, 8).setValue(targetCount)
    Sheet.getRange(LastRow, 9).setValue(nowCount)
    Sheet.getRange(LastRow, 10).setValue(averageSpeedRate)
    Sheet.getRange(LastRow, 11).setValue(timeLeft)
    Sheet.getRange(LastRow, 12).setValue(now)

    return ContentService.createTextOutput(true)
  }
  // 被亂撞 會回吐這段文字給前端
  return ContentService.createTextOutput('別亂撞我～～ :)')
}

function doGet () {
  var SpreadSheet = SpreadsheetApp.openById(
    '1kxYmwP3txX_HChjpiQ1-brcBnIYYX2661CE6p6Z_SKE'
  )
  var Sheet = SpreadSheet.getSheets()[0]
  var LastRow = Sheet.getLastRow()

  var values = Sheet.getSheetValues(LastRow, 1, 1, 12)

  var data = {
    nowStopTime: values[0][0],
    activeRate: values[0][1],
    startUpTime: values[0][2],
    produceStartTime: values[0][3],
    runTime: values[0][4],
    restTime: values[0][5],
    stopTime: values[0][6],
    targetCount: values[0][7],
    nowCount: values[0][8],
    averageSpeedRate: values[0][9],
    timeLeft: values[0][10],
    now: values[0][11]
  }

  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON
  )
}
