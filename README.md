# 테토-에겐 성격 테스트 Vercel 배포 가이드

## 🚀 Vercel 배포 방법

### 1. GitHub 저장소 생성
1. GitHub에 새 저장소를 만드세요 (예: `teto-egen-test`)
2. 이 압축 파일의 내용을 저장소에 업로드하세요

### 2. Vercel 배포
1. [Vercel](https://vercel.com)에 접속
2. GitHub 계정으로 로그인
3. "New Project" 클릭
4. GitHub 저장소 선택
5. 프레임워크가 **Vite**로 자동 감지되는지 확인
6. Build 설정이 다음과 같은지 확인:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

### 3. 자동 배포
- 설정 완료 후 "Deploy" 클릭
- 몇 분 후 배포 완료
- 제공되는 URL로 앱 접근 가능

## 📱 앱 기능
- **17개 질문 + 성별 선택**: 정확한 성격 분석
- **4가지 성격 유형**: 테토남, 테토녀, 에겐남, 에겐녀
- **게임 스타일 결과**: RPG 게임처럼 재미있는 결과 화면
- **캐릭터 그림**: 각 유형별 맞춤 캐릭터
- **진행바**: 테토력/에겐력 시각화
- **공유 기능**: 결과 공유 가능

## 🛠 기술 스택
- React 18 + TypeScript
- Vite (빌드 도구)
- Tailwind CSS
- Radix UI

## 💡 주의사항
- 정적 사이트로 구성되어 별도 서버나 데이터베이스 불필요
- Vercel 무료 플랜으로 호스팅 가능
- GitHub에 새 코드 push시 자동으로 재배포됨

## 🔧 로컬 개발 (선택사항)
```bash
npm install
npm run dev
```

배포 완료 후 제공되는 URL을 통해 앱을 확인하세요!