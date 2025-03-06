# Firebase 설정 가이드

이 프로젝트는 Firebase를 사용하여 인증, 데이터베이스 및 스토리지 기능을 구현합니다. 보안을 위해 Firebase 구성 정보를 환경 변수로 설정해야 합니다.

## 환경 변수 설정 방법

1. 프로젝트 루트 디렉토리에 `.env.local` 파일을 생성합니다.
2. 아래 내용을 `.env.local` 파일에 추가하고 실제 Firebase 프로젝트의 값으로 대체합니다:

```
# Firebase 환경 변수
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

## Firebase 구성 정보 찾는 방법

1. [Firebase 콘솔](https://console.firebase.google.com/)에 로그인합니다.
2. 프로젝트를 선택합니다.
3. 프로젝트 설정(⚙️)을 클릭합니다.
4. "일반" 탭에서 "내 앱" 섹션으로 이동합니다.
5. 웹 앱을 선택하고 Firebase SDK 스니펫을 확인합니다.
6. `firebaseConfig` 객체에서 필요한 값을 복사하여 `.env.local` 파일에 붙여넣습니다.

## 주의사항

- `.env.local` 파일을 Git에 커밋하지 마세요. 이 파일은 `.gitignore`에 포함되어 있어야 합니다.
- 배포 환경(Vercel, Netlify 등)에서도 동일한 환경 변수를 설정해야 합니다.
- Firebase Security Rules를 적절히 설정하여 권한 없는 접근을 방지하세요.

## API 키 보안

Firebase API 키가 클라이언트에 노출되어도 Firebase Security Rules가 제대로 설정되어 있다면 심각한 보안 문제는 발생하지 않습니다. 그러나 다음 추가 보안 조치를 권장합니다:

1. Firebase Console에서 API 키에 대한 HTTP 리퍼러(도메인) 제한을 설정하세요.
2. 적절한 보안 규칙을 설정하여 인증된 사용자만 데이터에 접근할 수 있도록 하세요.
3. 필요한 최소한의 권한만 부여하는 원칙을 따르세요. 