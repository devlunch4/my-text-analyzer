import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [wordFreq, setWordFreq] = useState([]);
  const [isMarkdownActive, setIsMarkdownActive] = useState(false);

  const analyzeText = (input) => {
    // 글자 수 계산 (공백 포함)
    const totalChars = input.length;
    setCharCount(totalChars);

    // 단어 빈도 계산
    const words = input
      .toLowerCase()
      .replace(/[^\w\s가-힣]/g, '') // 특수문자 제거
      .split(/\s+/)
      .filter(word => word.length > 0); // 빈 문자열 제거

    const freqMap = {};
    words.forEach(word => {
      freqMap[word] = (freqMap[word] || 0) + 1;
    });

    // 빈도순으로 정렬 후 상위 3개 추출
    const sortedFreq = Object.entries(freqMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
    setWordFreq(sortedFreq);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    analyzeText(newText);
  };

  const toggleMarkdown = () => {
    setIsMarkdownActive(!isMarkdownActive);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="여기에 텍스트를 입력하세요..."
        rows="10"
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
      
      {/* 결과 출력 */}
      <div style={{ marginTop: '20px' }}>
        <h3>분석 결과</h3>
        <p>글자 수 (공백 포함): {charCount}</p>
        <p>가장 많이 반복된 단어 3개:</p>
        <ul>
          {wordFreq.map(([word, count], index) => (
            <li key={index}>{word}: {count}회</li>
          ))}
        </ul>
      </div>

      {/* 마크다운 체크박스 */}
      <div style={{ marginTop: '20px' }}>
        <label>
          <input
            type="checkbox"
            checked={isMarkdownActive}
            onChange={toggleMarkdown}
          />
          마크다운 뷰 활성화
        </label>
      </div>

      {/* 마크다운 뷰어 */}
      {isMarkdownActive && (
        <div style={{ marginTop: '20px', border: '1px solid #ddd', padding: '10px' }}>
          <h3>마크다운 뷰어</h3>
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default TextAnalyzer;