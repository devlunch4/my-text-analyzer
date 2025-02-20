document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const charCountNoSpaces = document.getElementById("charCountNoSpaces");
  const charCount = document.getElementById("charCount");
  const wordList = document.getElementById("wordList");
  const markdownCheckbox = document.getElementById("markdownCheckbox");
  const markdownView = document.getElementById("markdownView");
  const markdownOutput = document.getElementById("markdownOutput");

  // 텍스트 분석 함수
  function analyzeText(text) {
    // 글자 수 (공백 미포함)
    const charsNoSpaces = text.replace(/\s/g, "").length; // 공백 제거 후 계산
    charCountNoSpaces.textContent = charsNoSpaces;

    // 글자 수 계산 (공백 포함)
    const totalChars = text.length;
    charCount.textContent = totalChars;

    // 단어 빈도 계산
    const words = text
      .toLowerCase()
      .replace(/[^\w\s가-힣]/g, "") // 특수문자 제거
      .split(/\s+/)
      .filter((word) => word.length > 0);

    const freqMap = {};
    words.forEach((word) => {
      freqMap[word] = (freqMap[word] || 0) + 1;
    });

    // 상위 3개 단어 추출
    const sortedFreq = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    // 단어 목록 업데이트
    wordList.innerHTML = "";
    sortedFreq.forEach(([word, count]) => {
      const li = document.createElement("li");
      li.textContent = `${word}: ${count}회`;
      wordList.appendChild(li);
    });

    // 마크다운 뷰 업데이트
    if (markdownCheckbox.checked) {
      markdownOutput.innerHTML = marked.parse(text);
    }
  }

  // 텍스트 입력 이벤트
  inputText.addEventListener("input", () => {
    analyzeText(inputText.value);
  });

  // 마크다운 체크박스 이벤트
  markdownCheckbox.addEventListener("change", () => {
    if (markdownCheckbox.checked) {
      markdownView.style.display = "block";
      markdownOutput.innerHTML = marked.parse(inputText.value);
    } else {
      markdownView.style.display = "none";
    }
  });
});
