# 텍스트 분석 도구 / Text Analyzer

## 한국어 설명
간단한 텍스트 분석 도구로, 글자 수 계산(공백 포함/미포함), 상위 5개 반복 단어 추출, 마크다운 뷰어 기능을 제공합니다. 순수 HTML, JavaScript, CSS로 작성되었으며, 모바일에서도 반응형으로 동작합니다.

### 주요 기능
- **글자 수 계산**: 공백 포함 및 미포함 글자 수를 실시간 표시.
- **반복 단어 분석**: 입력된 텍스트에서 가장 많이 반복된 단어 5개를 추출.
- **마크다운 뷰어**: 체크박스를 통해 마크다운 형식으로 렌더링된 텍스트 확인 (`marked.js` 사용).

### 설치 및 실행
1. **파일 준비**:
   - `index.html`, `script.js`, `style.css`를 같은 폴더에 저장.
2. **로컬 실행**:
   ```bash
   npx serve .
   ```
   - 브라우저에서 `http://localhost:3000` 접속.
   - 또는 `index.html`을 직접 열기.

---

## English Description
A simple text analysis tool that provides character count (with/without spaces), extracts the top 5 most repeated words, and includes a Markdown viewer. Built with pure HTML, JavaScript, and CSS, it is responsive and works on mobile devices.

### Key Features
- **Character Count**: Displays character count with and without spaces in real-time.
- **Repeated Word Analysis**: Extracts the 5 most frequently repeated words from the input text.
- **Markdown Viewer**: Renders text in Markdown format via a checkbox (`marked.js` used).

### Installation and Running
1. **File Preparation**:
   - Save `index.html`, `script.js`, and `style.css` in the same folder.
2. **Local Execution**:
   ```bash
   npx serve .
   ```
   - Open `http://localhost:3000` in a browser.
   - Alternatively, open `index.html` directly.

---

작성: 2025년 2월 19일  
Written: February 19, 2025