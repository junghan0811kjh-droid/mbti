import {results, mbtis} from "../data/data.js";

// 쿼리스트림을 가져와서 변수에 저장
const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti);
// 클래스 접근자 중 문자열로 접근하기 위해서  []  를 사용
console.log(results[mbtis[mbti]]);
const result = results[mbtis[mbti]];

// 변경할 태그를 읽어서 변수로 할당
const title = document.querySelector('.page-title')
const characterE1 = document.querySelector('.character')
const boxE1s = document.querySelectorAll('.box')
// 강의태그
const lectureE1 = document.querySelector('.lecture')
// 강의 및 이미지 태그
const lectureImgE1 = document.querySelector('.lecture img')
// 여러개 읽어서 한꺼번에 forEach...
// 우리는 forEach... 돌려서 처리한다.
const jobElements = document.querySelectorAll('.job')


title.innerHTML = result.title;
// 1. 결과의 메인 캐릭터 수정
characterE1.src = result.character;
// 2. result 결과 4개자리
boxE1s.forEach((box, index)=>{
  box.innerHTML = result.results[index]
})

jobElements.forEach((job, index)=>{
  job.innerHTML = result.jobs[index]
})

// 3. 강의 URL 수정
lectureE1.href = result.lectureUrl;
// 4. 강의 이미지 수정
lectureImgE1.src = result.lectureImg;