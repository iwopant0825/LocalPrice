# LocalPrice

주변 매장의 상품 가격을 비교할 수 있는 React Native 앱입니다.

## 주요 기능

- 🔍 **상품 검색**: 원하는 상품의 가격을 검색하고 비교
- 📍 **주변 매장**: 현재 위치를 기반으로 주변 매장 정보 제공
- 📊 **가격 비교**: 여러 매장의 가격을 한눈에 비교
- ❤️ **즐겨찾기**: 관심 상품을 즐겨찾기에 추가하여 가격 변동 추적
- 🔔 **가격 알림**: 설정한 가격 이하로 떨어질 때 알림
- 📱 **바코드 스캔**: 카메라로 바코드를 스캔하여 상품 정보 확인

## 기술 스택

- **React Native**: 0.79.5
- **Expo**: ~53.0.20
- **TypeScript**: ~5.8.3
- **React Navigation**: 네비게이션 라이브러리
- **Expo Vector Icons**: 아이콘 라이브러리

## 시작하기

### 필요 요구사항

- Node.js (v16 이상)
- npm 또는 yarn
- Expo CLI
- Expo Go 앱 (모바일 테스트용)

### 설치 및 실행

1. 의존성 설치:

```bash
npm install
```

2. 개발 서버 시작:

```bash
npm start
```

3. 모바일에서 테스트:
   - Expo Go 앱을 설치
   - QR 코드를 스캔하여 앱 실행

### 플랫폼별 실행

- **Android**: `npm run android`
- **iOS**: `npm run ios` (macOS 필요)
- **웹**: `npm run web`

## 프로젝트 구조

```
src/
├── components/     # 재사용 가능한 컴포넌트
├── navigation/     # 네비게이션 설정
├── screens/        # 화면 컴포넌트
├── services/       # API 및 외부 서비스
├── types/          # TypeScript 타입 정의
└── utils/          # 유틸리티 함수
```

## 스크립트

- `npm start`: Expo 개발 서버 시작
- `npm run android`: Android 앱 실행
- `npm run ios`: iOS 앱 실행
- `npm run web`: 웹 앱 실행
- `npm run lint`: ESLint 실행
- `npm run lint:fix`: ESLint 자동 수정
- `npm run type-check`: TypeScript 타입 체크

## 개발 가이드

### 코딩 스타일

- ESLint와 TypeScript를 사용하여 코드 품질 관리
- 컴포넌트는 함수형 컴포넌트로 작성
- StyleSheet를 사용한 스타일링

### 상태 관리

- React Hooks (useState, useEffect 등) 사용
- 복잡한 상태는 Context API 활용 예정

### API 연동

- `src/services/api.ts`에서 API 요청 함수 제공
- 실제 백엔드 API 연동 시 BASE_URL 수정 필요

## 라이선스

MIT License

## 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
"# LocalPrice" 
