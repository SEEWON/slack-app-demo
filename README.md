# Slack 앱 이해와 활용

Hands-On 세션을 위한 예제 Slack App Server입니다.

## Prerequisite

.env 파일을 채워넣기만 하면, 추가 dependency 설치 없이 바로 실행 가능합니다. <br />
(로컬 환경에 node.js가 설치되어 있어야 합니다.)

### alert-app 실행 전

`alert-app.js` 파일 상 userId와 channelId를 설정해야 합니다.

```
const userId = "U08M1DWPWJW";
const channelId = "C08LWMFUKCM";
```

`alert-app.js` 파일에서 `getTodayOnCallUserId()` 함수를 호출하려면,

```
const userId = getTodayOnCallUserId();
const channelId = "C08LWMFUKCM";
```

`on-call.js` 파일에서 요일별 On-Call 담당자의 UserId를 지정해야 합니다.

```
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
```

## 실행 방법

`hello` 메시지 반응 app

```
> node app.js
```

Incident Report app

```
> node alert-app.js
```
