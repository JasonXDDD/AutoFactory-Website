
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

const GAS_URL = "https://script.google.com/a/gms.tku.edu.tw/macros/s/AKfycbyaKooJHaVzIsyOLDGLNmxhWvD_CRaMKIXUDb7KJQ/exec"