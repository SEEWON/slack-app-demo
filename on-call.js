// on-call.js
const onCallSchedule = {
  // 요일별 담당자 userId 지정 (0: 일요일, 6: 토요일)
  0: "U08M1DWPWJW", // 일요일
  1: "U08LMN107M5", // 월요일
  2: "U08M1DWPWJW", // 화요일
  3: "U08LMN107M5", // 수요일
  4: "U08M1DWPWJW", // 목요일
  5: "U08LMN107M5", // 금요일
  6: "U08M1DWPWJW", // 토요일
};

function getTodayOnCallUserId() {
  const now = new Date();
  const utc9 = new Date(now.getTime() + 9 * 60 * 60 * 1000); // KST
  const day = utc9.getUTCDay();
  return onCallSchedule[day];
}

module.exports = { getTodayOnCallUserId };
