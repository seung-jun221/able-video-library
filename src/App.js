import React, { useState } from 'react';
import { X, Play } from 'lucide-react';
import './App.css';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeGrade, setActiveGrade] = useState(null);

  const videoData = {
    elementary4: {
      name: '초등 4학년',
      semesters: {
        '1학기': [
          { title: '1단원 (1) 1000이 10개인 수 알아보기', url: 'https://youtu.be/J8zuOwaiF_c' },
          { title: '1단원 (2) 10000이상의 큰 수 알아보기', url: 'https://youtu.be/vO36C0K4PwY' },
          { title: '1단원 (3) 뛰어세기', url: 'https://youtu.be/xdG0HF0_IWU' },
          { title: '1단원 (4) 수의 크기 비교하기', url: 'https://youtu.be/peCkHnMF85k' },
          { title: '2단원 (1) 직각보다 작은 각과 큰 각 알아보기', url: 'https://youtu.be/rBhlaofNpnc' },
          { title: '2단원 (2) 각의 크기 어림하기', url: 'https://youtu.be/sIoT5t0HYzQ' },
          { title: '2단원 (3) 각 그리는 방법 알기', url: 'https://youtu.be/sIoT5t0HYzQ' },
          { title: '2단원 (4) 각도의 합과 차 구하기', url: 'https://youtu.be/RWQ8Zt_77Pg' },
          { title: '2단원 (5) 삼각형, 사각형 각의 크기 합 알아보기', url: 'https://youtu.be/kvkrZt0BVQE' },
          { title: '3단원 (1) 한 자리 또는 두 자리 수 곱하기', url: 'https://youtu.be/oMebBeR9oVM' },
          { title: '3단원 (2) 한 자리 또는 두 자리 수 곱셈 어림하기', url: 'https://youtu.be/B1gjh1TxCtw' },
          { title: '3단원 (3) 실생활 문제 해결하기', url: 'https://youtu.be/Nd8sxSErk5s' },
          { title: '3단원 (4) 나눗셈의 의미 이해하기', url: 'https://youtu.be/camHJJpF0KU' },
          { title: '3단원 (5) 두 자리의 수 나누기', url: 'https://youtu.be/JfNc0mv2CU8' },
          { title: '4단원 (1) 평면도형의 밀기, 뒤집기', url: 'https://youtu.be/BY8zKm50WxI' },
          { title: '4단원 (2) 평면도형의 돌리기', url: 'https://youtu.be/n7nvm38-Bg0' },
          { title: '4단원 (3) 평면도형의 뒤집고 돌리기', url: 'https://youtu.be/vemMeY5-hJo' },
          { title: '4단원 (4) 규칙적인 무늬 꾸미기', url: 'https://youtu.be/9FncuUeN1x0' },
          { title: '5단원 (1) 막대그래프 알아보기', url: 'https://youtu.be/SuxkIg0p7lE' },
          { title: '5단원 (2) 막대그래프 나타내기', url: 'https://youtu.be/b1UPz5bfyFA' },
          { title: '5단원 (3) 막대그래프 해석하기', url: 'https://youtu.be/GS1dkAcsBjY' },
          { title: '5단원 (4) 막대그래프로 이야기 만들기', url: 'https://youtu.be/ousfbqcDHcY' },
          { title: '6단원 (1) 수의 배열에서 규칙 찾기', url: 'https://youtu.be/09Xo5g0P6a4' },
          { title: '6단원 (2) 도형의 배열에서 규칙 찾기', url: 'https://youtu.be/ZUbXikMdyP0' },
          { title: '6단원 (3) 규칙을 수나 식으로 나타내기', url: 'https://youtu.be/I5hWfZ7sGEY' },
          { title: '6단원 (4) 규칙적인 계산식 찾기', url: 'https://youtu.be/okZZ14UHmSY' },
        ],
        '2학기': [
          { title: '1단원 (1) 진분수의 덧셈과 뺄셈하기', url: 'https://youtu.be/hZq_szHbLF0' },
          { title: '1단원 (2) 분수의 덧셈하기', url: 'https://youtu.be/hZq_szHbLF0' },
          { title: '1단원 (3) 분수의 뺄셈하기-1', url: 'https://youtu.be/AdogbudGLII' },
          { title: '1단원 (4) 분수의 뺄셈하기-2', url: 'https://youtu.be/dl4cKBJ8-YA' },
          { title: '1단원 (5) 분수의 뺄셈하기-3', url: 'https://youtu.be/dl4cKBJ8-YA' },
          { title: '2단원 (1) 삼각형 분류하기-1', url: 'https://youtu.be/S2raFbSvyl0' },
          { title: '2단원 (2) 삼각형 분류하기-2', url: 'https://youtu.be/S2raFbSvyl0' },
          { title: '2단원 (3) 삼각형을 두 가지 기준으로 분류하기', url: 'https://youtu.be/YiZBxV6fDx0' },
          { title: '3단원 (1) 소수 두 자리 수 알아보기', url: 'https://youtu.be/S4BhRS4Apv0' },
          { title: '3단원 (2) 소수 세 자리 수 알아보기', url: 'https://youtu.be/EYC9NlXy1ns' },
          { title: '3단원 (3) 소수의 크기 비교하기', url: 'https://youtu.be/rGAIGgjCbiI' },
          { title: '3단원 (4) 소수 사이의 관계 알아보기', url: 'https://youtu.be/rGAIGgjCbiI' },
          { title: '3단원 (5) 소수의 덧셈과 뺄셈하기-1', url: 'https://youtu.be/1jUFqdYeIqI' },
          { title: '3단원 (6) 소수의 덧셈과 뺄셈하기-2', url: 'https://youtu.be/hBe2iMfub7M' },
          { title: '4단원 (1) 수직과 평행 알아보기', url: 'https://youtu.be/2lk8ObNwiYE' },
          { title: '4단원 (2) 사다리꼴 알아보기', url: 'https://youtu.be/Xrt2c887iuQ' },
          { title: '4단원 (3) 평행사변형 알아보기', url: 'https://youtu.be/lnzcSwVYwI8' },
          { title: '4단원 (4) 마름모 알아보기', url: 'https://youtu.be/kg4BmVrVzUE' },
          { title: '4단원 (5) 여러 가지 사각형 알아보기', url: 'https://youtu.be/oxP7BetyFlY' },
          { title: '5단원 (1) 꺾은선그래프 알아보기', url: 'https://youtu.be/ZWqpmV3XyaA' },
          { title: '5단원 (2) 꺾은선그래프 그리는 방법 알기', url: 'https://youtu.be/MLXimQquqJg' },
          { title: '5단원 (3) 자료를 꺾은선그래프로 나타내기', url: 'https://youtu.be/8WGMkHcfhWE' },
          { title: '6단원 (1) 다각형 알아보기', url: 'https://youtu.be/ZyOTF7m7dHI' },
          { title: '6단원 (2) 대각선 알아보기', url: 'https://youtu.be/ZyOTF7m7dHI' },
          { title: '6단원 (3) 모양 만들거나 채우기', url: 'https://youtu.be/OrcD0uw4vUQ' },
        ],
      },
    },
    elementary5: {
      name: '초등 5학년',
      semesters: {
        '1학기': [
          { title: '1단원 (1) 덧셈과 뺄셈이 섞여있는 식을 계산해 볼까요', url: 'https://youtu.be/sdQDE1b-wlY' },
          { title: '1단원 (2) 곱셈과 나눗셈이 섞여있는 식을 계산해 볼까요', url: 'https://youtu.be/AGohcA2yENg' },
          { title: '1단원 (3) 덧셈, 뺄셈, 곱셈이 섞여있는 식을 계산해 볼까요', url: 'https://youtu.be/VJAb8xFTReQ' },
          { title: '1단원 (4) 덧셈, 뺄셈, 나눗셈이 섞여있는 식을 계산해 볼까요', url: 'https://youtu.be/wQevwEvMBho' },
          { title: '1단원 (5) 덧셈, 뺄셈, 곱셈, 나눗셈이 섞여있는 식을 계산해 볼까요', url: 'https://youtu.be/4fiBHTeWRRk' },
          { title: '2단원 (1) 곱을 이용하여 약수와 배수의 관계를 알아볼까요', url: 'https://youtu.be/9eDOVN8WVdY' },
          { title: '2단원 (2) 공약수와 최대공약수를 알아볼까요', url: 'https://youtu.be/Gi1LCDdua1s' },
          { title: '2단원 (3) 최대공약수를 구하는 방법을 알아볼까요', url: 'https://youtu.be/lweZX058oHM' },
          { title: '2단원 (4) 공배수와 최소공배수를 알아볼까요', url: 'https://youtu.be/AADbAv1rnAs' },
          { title: '2단원 (5) 최소공배수를 구하는 방법을 알아볼까요', url: 'https://youtu.be/_IxG0H2r43Q' },
          { title: '3단원 (1) 두 양 사이의 관계를 알아볼까요', url: 'https://youtu.be/Po_W8g-DgWc' },
          { title: '3단원 (2) 대응관계를 식으로 나타내는 방법을 알아볼까요', url: 'https://youtu.be/zANkdFkaiMc' },
          { title: '3단원 (3) 생활 속에서 대응 관계를 찾아 식으로 나타내어 볼까요', url: 'https://youtu.be/68pn887_DB8' },
          { title: '4단원 (1)크기가 같은 분수를 알아볼까요', url: 'https://youtu.be/Py827hOn6QI' },
          { title: '4단원 (2)분수를 간단하게 나타내어 볼까요', url: 'https://youtu.be/-H2_zQssOic' },
          { title: '4단원 (3)분수의 크기를 비교해 볼까요', url: 'https://youtu.be/GsYKevjFG80' },
          { title: '4단원 (4) 분수와 소수의 크기를 비교해 볼까요', url: 'https://youtu.be/Oq3wiopQTMo' },
          { title: '5단원 (1) 분수의 덧셈을 해볼까요-1', url: 'https://youtu.be/9035j_zkR3A' },
          { title: '5단원 (2) 분수의 덧셈을 해볼까요-2', url: 'https://youtu.be/1IwpRMVmLL4' },
          { title: '5단원 (3) 분수의 뺄셈을 해볼까요-1', url: 'https://youtu.be/9q54ZudB9K0' },
          { title: '6단원 (1)정다각형의 둘레를 구해 볼까요', url: 'https://youtu.be/fEZyk1hcoYg' },
          { title: '6단원 (2) 다양한 사각형의 둘레를 구해 볼까요', url: 'https://youtu.be/6PP3NJq3M4A' },
          { title: '6단원 (3) 1cm²를 알아볼까요', url: 'https://youtu.be/j3XujwBmk2E' },
          { title: '6단원 (4) 직사각형의 넓이를 구해 볼까요', url: 'https://youtu.be/9FLQdiuKUxw' },
          { title: '6단원 (5) 1m²와 1km²를 알아볼까요', url: 'https://youtu.be/stn7hY7wdzE' },
          { title: '6단원 (6) 평행사변형의 넓이를 구해 볼까요', url: 'https://youtu.be/zRnJNczujkk' },
          { title: '6단원 (7) 삼각형의 넓이를 구해 볼까요', url: 'https://youtu.be/GDShVH5Fgxc' },
          { title: '6단원 (8) 마름모와 사다리꼴의 넓이 구해 볼까요', url: 'https://youtu.be/t5npK5XisCI' },
        ],
        '2학기': [
          { title: '1단원 (1) 이상과 이하, 초과와 미만을 알아볼까요', url: 'https://youtu.be/HqSvsrpeu0M' },
          { title: '1단원 (2) 올림, 버림, 반올림을 알아볼까요', url: 'https://youtu.be/wdiVsBtEW2s' },
          { title: '2단원 (1) 분수x자연수를 알아볼까요', url: 'https://youtu.be/ppTGWwD3FPE' },
          { title: '2단원 (2) 자연수x분수를 알아볼까요', url: 'https://youtu.be/YZYSEg9hxlw' },
          { title: '2단원 (3) 여러 가지 분수의 곱셈을 알아볼까요', url: 'https://youtu.be/WruaRuGVZb4' },
          { title: '3단원 (1) 도형의 합동을 알아볼까요', url: 'https://youtu.be/7erGfkcUocg' },
          { title: '3단원 (2) 합동인 도형의 성질을 알아볼까요', url: 'https://youtu.be/viAeBXhUlJ8' },
          { title: '3단원 (3) 선대칭도형과 그 성질을 알아볼까요', url: 'https://youtu.be/lY0MvaGSnII' },
          { title: '3단원 (4) 점대칭도형과 그 성질을 알아볼까요', url: 'https://youtu.be/M1UhXh-zfzI' },
          { title: '4단원 (1) 소수x자연수를 알아볼까요', url: 'https://youtu.be/qsMSoUBrHsk' },
          { title: '4단원 (2) 자연수x소수를 알아볼까요', url: 'https://youtu.be/dB0SE334l08' },
          { title: '4단원 (3) 소수x소수를 알아볼까요', url: 'https://youtu.be/HjUevtAVFGE' },
          { title: '4단원 (4) 곱의 소수점 위치는 어떻게 달라질까요', url: 'https://youtu.be/SfQWQbHB4Z0' },
          { title: '5단원 (1) 직사각형 6개로 둘러싸인 도형을 알아볼까요', url: 'https://youtu.be/K317M0VXmKE' },
          { title: '5단원 (2) 정사각형 6개로 둘러싸인 도형을 알아볼까요', url: 'https://youtu.be/iHZPmouVNnw' },
          { title: '5단원 (3)직육면체의 성질을 알아볼까요', url: 'https://youtu.be/L_J51F_oRkA' },
          { title: '5단원 (4)직육면체의 겨냥도를 알아볼까요', url: 'https://youtu.be/yFVKDZb7ha4' },
          { title: '5단원 (5)정육면체와 직육면체의 전개도를 알아볼까요', url: 'https://youtu.be/Nf3XDk5K-dE' },
          { title: '6단원 (1)평균을 구해볼까요', url: 'https://youtu.be/OHMRfnJTkYY' },
          { title: '6단원 (2)평균을 어떻게 이용할까요', url: 'https://youtu.be/XPOnxes9nGM' },
          { title: '6단원 (3)일이 일어날 가능성을 말로 표현해 볼까요', url: 'https://youtu.be/mNItvmd735Y' },
          { title: '6단원 (4)일이 일어날 가능성을 비교해 볼까요', url: 'https://youtu.be/S4GGo4hU3l0' },
          { title: '6단원 (5)일이 일어날 가능성을 수로 표현해 볼까요', url: 'https://youtu.be/aLE9uu-WHno' },
        ],
      },
    },
    elementary6: {
      name: '초등 6학년',
      semesters: {
        '1학기': [
          { title: '1단원 (1) (자연수)÷(자연수)에서 나눗셈의 몫을 분수로 나타낼 수 있어요', url: 'https://youtu.be/rqwbdgUy8sE' },
          { title: '1단원 (1) 자연수÷자연수에서 나눗셈의 몫을 분수로 나타낼 수 있어요 ①', url: 'https://youtu.be/mOpqC6S-99k' },
          { title: '1단원 (2) 자연수÷자연수에서 나눗셈의 몫을 분수로 나타낼 수 있어요 ②', url: 'https://youtu.be/xwcmkFNB5RE' },
          { title: '1단원 (3) 분수의 나눗셈의 계산 원리를 이해하고 계산할 수 있어요', url: 'https://youtu.be/8zifNqtLWB8' },
          { title: '1단원 (4) 분수÷자연수를 분수의 곱셈으로 나타내어 보아요', url: 'https://youtu.be/1dwcF-P60j8' },
          { title: '1단원 (5) 대분수÷자연수을 알아보아요', url: 'https://youtu.be/0Ycu2c8Ej3s' },
          { title: '2단원 (1) 각기둥을 알아보아요', url: 'https://youtu.be/lzSm7zTg3Zc' },
          { title: '2단원 (2) 각기둥의 구성요소와 성질을 알아보아요', url: 'https://youtu.be/pUGAI7_Zv3o' },
          { title: '2단원 (3) 각기둥의 전개도를 알아보고 그릴 수 있어요', url: 'https://youtu.be/26OHyXe6des' },
          { title: '2단원 (4) 각뿔을 알아보아요', url: 'https://youtu.be/kQnII7ddKQQ' },
          { title: '3단원 (1) (소수)÷(자연수)를 알아보아요-1', url: 'https://youtu.be/vx26aCCi0O8' },
          { title: '3단원 (2) 소수÷자연수를 알아보아요-2', url: 'https://youtu.be/C7MeXg3DD1A' },
          { title: '3단원 (3) 소수÷자연수를 알아보아요-3', url: 'https://youtu.be/dZNBZ5i_tHY' },
          { title: '3단원 (4) 자연수÷자연수의 몫을 소수로 나타내어보아요', url: 'https://youtu.be/M9JtpL8rQTs' },
          { title: '3단원 (5) 소수의 나눗셈의 계산 결과를 어림할 수 있어요', url: 'https://youtu.be/hsoMz6JkM6Y' },
          { title: '4단원 (1) 비를 알아보아요', url: 'https://youtu.be/8mglbpYOY0I' },
          { title: '4단원 (2) 비율을 알아보아요-1', url: 'https://youtu.be/ChiZctwAkPA' },
          { title: '4단원 (3) 비율을 알아보아요-2', url: 'https://youtu.be/UukbMhDg_oQ' },
          { title: '4단원 (4) 백분율을 알아보아요-1', url: 'https://youtu.be/6T2n8he6IFU' },
          { title: '4단원 (5) 백분율을 알아보아요-2', url: 'https://youtu.be/p8-OFZ2XCPE' },
          { title: '5단원 (1) 그림그래프를 알아보아요', url: 'https://youtu.be/GXYhH8SqlXA' },
          { title: '5단원 (2) 띠그래프를 알아보아요', url: 'https://youtu.be/oiTyuysMAXs' },
          { title: '5단원 (3) 원그래프를 알아보아요', url: 'https://youtu.be/rb67UxSJH-8' },
          { title: '5단원 (4) 띠그래프와 원그래프로 나타내어 보아요', url: 'https://youtu.be/Cl7T4DnZ9yY' },
          { title: '5단원 (5) 여러 가지 그래프를 비교하고 해석해 보아요', url: 'https://youtu.be/F3BpKhzX-ck' },
          { title: '6단원 (1) 부피의 단위를 알아보아요', url: 'https://youtu.be/G07lF-v_kXI' },
          { title: '6단원 (2) 직육면체와 정육면체의 부피를 구해보아요-1', url: 'https://youtu.be/tSa3ysLwCHo' },
          { title: '6단원 (3) 직육면체와 정육면체의 부피를 구해보아요-2', url: 'https://youtu.be/JI-xCjFGCB8' },
          { title: '6단원 (4) 직육면체와 정육면체의 겉넓이를 알아보아요', url: 'https://youtu.be/JxJYzwFdvac' },
        ],
        '2학기': [
          { title: '1단원 (1) 분수÷분수를 알아보아요-1', url: 'https://youtu.be/RhNlEMplfpY' },
          { title: '1단원 (2) 분수÷분수를 알아보아요-2', url: 'https://youtu.be/4bh962Px7ME' },
          { title: '1단원 (3) 자연수÷분수를 알아보아요', url: 'https://youtu.be/HsPx2rISgzE' },
          { title: '1단원 (4) 분수÷분수를 분수×분수로 나타내어 보아요', url: 'https://youtu.be/Bu4rG8p5tbU' },
          { title: '1단원 (5) 분수÷분수를 계산해 보아요', url: 'https://youtu.be/aNkxnGdzPLQ' },
          { title: '2단원 (1) 소수÷소수를 알아보아요-1', url: 'https://youtu.be/O1tcDZ2oCjA' },
          { title: '2단원 (2) 소수÷소수를 알아보아요-2', url: 'https://youtu.be/2_0CWervLOo' },
          { title: '2단원 (3) 자연수÷소수를 알아보아요', url: 'https://youtu.be/cVv-oBBppxg' },
          { title: '2단원 (4) 소수의 나눗셈의 계산 결과를 어림해 보아요', url: 'https://youtu.be/JzgitbF-w_0' },
          { title: '2단원 (5) 나누어 주고 남는 양을 알아보아요', url: 'https://youtu.be/_LYVnrcTZiY' },
          { title: '3단원 (1) 쌓은 모양과 쌓기나무의 개수를 알아보아요-1', url: 'https://youtu.be/1YabThyne4w' },
          { title: '3단원 (2) 쌓은 모양과 쌓기나무의 개수를 알아보아요-2', url: 'https://youtu.be/UssmdpcMcCY' },
          { title: '3단원 (3) 쌓은 모양과 쌓기나무의 개수를 알아보아요-3', url: 'https://youtu.be/MYdi81zyYdA' },
          { title: '4단원 (1) 비의 성질을 알아보아요', url: 'https://youtu.be/FcbSp9bGVYg' },
          { title: '4단원 (2) 간단한 자연수의 비로 나타내어 보아요', url: 'https://youtu.be/IDvXgJoBqbc' },
          { title: '4단원 (3) 비례식을 알아보아요-1', url: 'https://youtu.be/1IluYwZC9n8' },
          { title: '4단원 (5) 비례배분을 알아보아요', url: 'https://youtu.be/g_DfuLBc7kM' },
          { title: '5단원 (1) 원주와 원주율을 알아보아요', url: 'https://youtu.be/j5xFPtu6AG4' },
          { title: '5단원 (2) 원주와 지름을 구해보아요', url: 'https://youtu.be/qPsMrYGDeko' },
          { title: '5단원 (3) 원의 넓이를 구해보아요-1', url: 'https://youtu.be/bo05FGA-ORY' },
          { title: '5단원 (4) 원의 넓이를 구해보아요-2', url: 'https://youtu.be/SWvwesv41TY' },
          { title: '6단원 (1) 원기둥을 알아보아요', url: 'https://youtu.be/JgJRRt8int8' },
          { title: '6단원 (2) 원뿔을 알아보아요', url: 'https://youtu.be/sfg2wE0hdnk' },
          { title: '6단원 (3) 구를 알아보아요', url: 'https://youtu.be/8Sm9YecUJwM' },
        ],
      },
    },
    middle1_1: {
      name: '중1-1',
      semesters: {
        '중1-1': [
          { title: '1. 소수와 합성수', url: 'https://youtu.be/csy0RfZiPBQ' },
          { title: '2. 거듭제곱', url: 'https://youtu.be/RLyRGj6MkXo' },
          {
            title: '3. 소인수분해 (쉽게 하는 법)',
            url: 'https://youtu.be/EZAyTMQ2rzo',
          },
          { title: '4. 서로소', url: 'https://youtu.be/xpI4D3JKsFU' },
          {
            title: '5. 소인수분해와 최대공약수',
            url: 'https://youtu.be/Raj9WbFnvdk',
          },
          {
            title: '6. 소인수분해와 최소공배수',
            url: 'https://youtu.be/0Rn5x5wIVAs',
          },
          { title: '7. 양수와 음수', url: 'https://youtu.be/AyU-vptkmog' },
          {
            title: '8. 정수와 유리수, 수직선',
            url: 'https://youtu.be/cfvaBqQxsRo',
          },
          { title: '9. 절댓값', url: 'https://youtu.be/hInxcsWEn3c' },
          {
            title: '10. 수의 대소관계 (수직선)',
            url: 'https://youtu.be/5vufZY6J-5o',
          },
          {
            title: '11. 정수와 유리수의 덧셈',
            url: 'https://youtu.be/_P81rbqK7No',
          },
          {
            title: '12. 덧셈의 교환법칙, 결합법칙',
            url: 'https://youtu.be/fTWou00mjoY',
          },
          {
            title: '13. 정수와 유리수의 뺄셈',
            url: 'https://youtu.be/aeN6q9RMWjY',
          },
          {
            title: '14. 정수와 유리수의 곱셈',
            url: 'https://youtu.be/mIufqzv9urc',
          },
          {
            title: '15. 곱셈의 교환법칙, 결합법칙',
            url: 'https://youtu.be/Ei28gS3pVKU',
          },
          { title: '16. 분배법칙', url: 'https://youtu.be/0yJ7M10PIJA' },
          {
            title: '17. 정수와 유리수의 나눗셈(역수)',
            url: 'https://youtu.be/_MMiX-vrK0Y',
          },
          {
            title: '18. 사칙연산이 섞인 식의 계산(계산순서)',
            url: 'https://youtu.be/kPQmE7hXnfU',
          },
          {
            title: '19. 문자를 사용한 식 곱셈,나눗셈 기호 생략',
            url: 'https://youtu.be/i7QE3CP2nfA',
          },
          { title: '20. 식의 값 (대입)', url: 'https://youtu.be/lWcf7vdF3EE' },
          {
            title: '21. 일차식(차수,다항식,계수,항)',
            url: 'https://youtu.be/VgOJL895voE',
          },
          {
            title: '22. 일차식과 수의 곱셈, 나눗셈',
            url: 'https://youtu.be/aODe6S7FnVU',
          },
          {
            title: '23. 일차식의 덧셈과 뺄셈(동류항)',
            url: 'https://youtu.be/r3O80l41_xo',
          },
          {
            title: '24. 방정식이란? (등식, 항등식)',
            url: 'https://youtu.be/hp0g6kdApBc',
          },
          {
            title: '25. 등식의 성질 (이항)',
            url: 'https://youtu.be/t1ZbnzK61oQ',
          },
          {
            title: '26. 일차방정식의 풀이',
            url: 'https://youtu.be/srCQb53ZJjs',
          },
          {
            title: '27. 일차방정식의 활용',
            url: 'https://youtu.be/h6IG9UZL_84',
          },
          { title: '28. 순서쌍과 좌표', url: 'https://youtu.be/spp6mvRH28M' },
          { title: '29. 그래프', url: 'https://youtu.be/Kwqi48W2muY' },
          { title: '30. 정비례 관계', url: 'https://youtu.be/17Q9mSMF7tw' },
          {
            title: '31. 정비례관계의 그래프',
            url: 'https://youtu.be/17Q9mSMF7tw',
          },
          { title: '32. 반비례 관계', url: 'https://youtu.be/GmzsJBr9WUw' },
          {
            title: '33. 반비례관계의 그래프',
            url: 'https://youtu.be/Z9ymrUK__9A',
          },
        ],
      },
    },
    middle1_2: {
      name: '중1-2',
      semesters: {
        '중1-2': [
          { title: '1. 점선면', url: 'https://youtu.be/dNsRy_cb1fM' },
          {
            title: '2. 직선, 반직선 , 선분',
            url: 'https://youtu.be/7Dl9i0ESVnE',
          },
          {
            title: '3. 각(각도, 각의크기,종류)',
            url: 'https://youtu.be/qmTHG8eOhkU',
          },
          {
            title: '4. 맞꼭지각(직교,수직이등분선,수선의발,점과직선의거리)',
            url: 'https://youtu.be/1BFMpo0llbA',
          },
          {
            title: '5. 점과 직선의 위치관계 , 두직선의 위치관계',
            url: 'https://youtu.be/yj5nTKB8HHI',
          },
          {
            title: '6. 공간에서 두 직선의 위치관계 (꼬인위치)',
            url: 'https://youtu.be/mKw9J2M3fC0',
          },
          {
            title: '7. 직선과 평며의 위치관계(수선의발, 수직의조건)',
            url: 'https://youtu.be/jt8FhiW6hBM',
          },
          {
            title: '8. 동위각과 엇각 정의',
            url: 'https://youtu.be/LUALb4ruRBY',
          },
          {
            title: '9. 평행선에서 동위각의 엇각의 성질',
            url: 'https://youtu.be/6Ex6S1LvXaU',
          },
          { title: '10. 작도', url: 'https://youtu.be/xUY2nlVwYpQ' },
          {
            title: '11. 삼각형의 작도 (세가지방법)',
            url: 'https://youtu.be/QhhzmYnhFgQ',
          },
          {
            title: '12. 삼각형의 합동조건(SSS,SAS,ASA합동)',
            url: 'https://youtu.be/FtoxDldpVLs',
          },
          {
            title: '13. 다각형(내각,외각)',
            url: 'https://youtu.be/e_Ch-8f6tmk',
          },
          {
            title: '14. 삼각형의 내각과 외각관계',
            url: 'https://youtu.be/Qk33cW7XZ4o',
          },
          {
            title: '15. 다각형의 대각선의 개수',
            url: 'https://youtu.be/T7LakAsmoWs',
          },
          {
            title: '16. 다각형의 내각의 크기의 합',
            url: 'https://youtu.be/KnphcjJ2J4I',
          },
          {
            title: '17. 다각형의 외각의 크기의 합',
            url: 'https://youtu.be/r4dz6ktaSHQ',
          },
          {
            title: '18. 호와 현, 부채꼴과 활선, 할선',
            url: 'https://youtu.be/qDSfu3pG758',
          },
          {
            title: '19. 부채꼴의 성질(중심각)',
            url: 'https://youtu.be/8hge_leyoQo',
          },
          { title: '20. 원주율 파이', url: 'https://youtu.be/zpmBO9f6_jk' },
          {
            title: '21. 부채꼴의 호의 길이와 넓이 (구하는공식)',
            url: 'https://youtu.be/WF0Q7mtM_mU',
          },
          {
            title: '22. 부채꼴 호의 길이와 넓이 관계',
            url: 'https://youtu.be/uaaBqlqdCrc',
          },
          { title: '23. 다면체', url: 'https://youtu.be/D_fjWYqixDc' },
          { title: '24. 정다면체', url: 'https://youtu.be/B1EjFE_NFwc' },
          {
            title: '25. 회전체 (최전축,단면)',
            url: 'https://youtu.be/5QvP79x5QPY',
          },
          {
            title: '26. 기둥의 겉넓이 (각기둥,원기둥)',
            url: 'https://youtu.be/bUzKG5dw5Og',
          },
          {
            title: '27. 기둥의 부피 (각기둥,원기둥)',
            url: 'https://youtu.be/XU4uAX6VDvQ',
          },
          {
            title: '28. 뿔의 겉넓이(각뿔,원뿔)',
            url: 'https://youtu.be/ewABx8AHqLM',
          },
          { title: '29. 뿔의 부피', url: 'https://youtu.be/tyLY7_kWssA' },
          { title: '30. 구의 겉넓이', url: 'https://youtu.be/4chJpd8eTn8' },
          { title: '31. 구의 부피', url: 'https://youtu.be/Q8O1TSMgD6s' },
          { title: '32. 줄기와 잎 그림', url: 'https://youtu.be/XYdRD69AnPw' },
          { title: '33. 도수분포표', url: 'https://youtu.be/XYdRD69AnPw' },
          { title: '34. 히스토그램', url: 'https://youtu.be/ZN-djNuVobs' },
          { title: '35. 도수분포 다각형', url: 'https://youtu.be/B7UniNJUuyg' },
          { title: '36. 상대도수', url: 'https://youtu.be/9TpuQNC3Whs' },
          {
            title: '37. 도수의 총합이 다른 두 자료의 분포의 비교',
            url: 'https://youtu.be/sajNoIwJqZw',
          },
        ],
      },
    },
    middle2_1: {
      name: '중2-1',
      semesters: {
        '중2-1': [
          {
            title: '1. 유한소수와 무한소수',
            url: 'https://youtu.be/W3WF7GM-uAQ',
          },
          {
            title: '2. 유한소수로 나타낼 수 있는 유리수',
            url: 'https://youtu.be/vB0MjvqSS40',
          },
          {
            title: '3. 순환소수로 나타낼 수 있는 유리수',
            url: 'https://youtu.be/ve8EwbrJ8n0',
          },
          {
            title: '4. 순화소수를 분수로 나타내기',
            url: 'https://youtu.be/D6Ggw_4IOyE',
          },
          { title: '5. 지수법칙(1)', url: 'https://youtu.be/AzLFQSxWuH0' },
          { title: '6. 지수법칙(2)', url: 'https://youtu.be/vwCE4qRu91Q' },
          {
            title: '7. 단항식의 곱셈(계수는 계수끼리 , 문자는 문자끼리)',
            url: 'https://youtu.be/7dusKfshRYA',
          },
          { title: '8. 단항식의 나눗셈', url: 'https://youtu.be/Ra3eGdSKypg' },
          {
            title: '9. 다항식의 덧셈과 뺄셈(동류항)',
            url: 'https://youtu.be/1e-QuCxN3O8',
          },
          {
            title: '10. 다항식의 곱셈과 나눗셈(단항식)',
            url: 'https://youtu.be/0KJ-XFsF6MM',
          },
          { title: '11. 식의대입', url: 'https://youtu.be/awbqoCfWLWs' },
          { title: '12. 부등식과 그 해', url: 'https://youtu.be/LQfOc7gU9wc' },
          { title: '13. 부등식의 성질', url: 'https://youtu.be/9eP61fEXDbU' },
          {
            title: '14. 일차부등식의 풀이',
            url: 'https://youtu.be/YrJOXIYKNDo',
          },
          {
            title: '15. 일차부등식의 활용',
            url: 'https://youtu.be/7qd7wBvJr0E',
          },
          {
            title: '16. 미지수가 2개인 일차방정식',
            url: 'https://youtu.be/rhrD6y7Cyig',
          },
          {
            title: '17. 미지수가 2개인 연립일차방정식',
            url: 'https://youtu.be/HnLUvXdLWNY',
          },
          {
            title: '18. 덧셈, 뺄셈을 이용한 연립방정식의 풀이 (가감법)',
            url: 'https://youtu.be/0mt9OWIyjhY',
          },
          {
            title: '19. 대입을 이용한 연린일차방정식의 풀이 (대입법)',
            url: 'https://youtu.be/Bz07s4NV6Bc',
          },
          {
            title: '20. 여러 가지 연립방정식의 풀이 (부정,불능)',
            url: 'https://youtu.be/ZnlGdt_Z3fU',
          },
          {
            title: '21. 미지수가 2개인 연립방정식의 활용',
            url: 'https://youtu.be/Nvb86WkgtCQ',
          },
          { title: '22. 함수', url: 'https://youtu.be/9ePn_qPWgp8' },
          { title: '23. 일차함수', url: 'https://youtu.be/50SWpBps7Jk' },
          {
            title: '24. 일차함수의 그래프 (평행이동)',
            url: 'https://youtu.be/_fbaixNNPgA',
          },
          {
            title: '25. 일차함수의 그래프와 절편(X전편,Y절편)',
            url: 'https://youtu.be/Km_ASW1riuE',
          },
          {
            title: '26. 일차함수의 그래프와 기울기',
            url: 'https://youtu.be/B5hKMA8-MC4',
          },
          {
            title: '27. 일차함수의 그래프의 성질',
            url: 'https://youtu.be/E-UhaLAOC0k',
          },
          {
            title: '28. 일차함수의 식 구하기(함수식,관계식)',
            url: 'https://youtu.be/8apMx5O20hE',
          },
          { title: '29. 일차함수의 활용', url: 'https://youtu.be/pgypyFDImZI' },
          {
            title: '30. 일차함수와 미지수가 2개인 일차방정식',
            url: 'https://youtu.be/HUn37ZRkbCM',
          },
          {
            title: '31. 방정식X=p,Y=q 의 그래프(직선의방정식)',
            url: 'https://youtu.be/tL5o3WYNTgI',
          },
          {
            title: '32. 일차함수의 그래프와 연립일차방정식의 해',
            url: 'https://youtu.be/Dh6jvMSqCk4',
          },
        ],
      },
    },
    middle2_2: {
      name: '중2-2',
      semesters: {
        '중2-2': [
          {
            title: '1. 이등변삼각형의 성질',
            url: 'https://youtu.be/40T-NMAqd08',
          },
          {
            title: '2. 이등변삼각형이 되는 조건',
            url: 'https://youtu.be/pqZptjsLVR0',
          },
          {
            title: '3. 직각삼각형의 합동조건(RHS,RHA)',
            url: 'https://youtu.be/YiCS2SKXFmA',
          },
          {
            title: '4. 삼각형의 외심 (외심의 성질)',
            url: 'https://youtu.be/eYBTgBqjJkY',
          },
          {
            title: '5. 삼각형의 내심 (내심의 성질)',
            url: 'https://youtu.be/CJakcapfSB0',
          },
          {
            title: '6. 평행사변형의 성질',
            url: 'https://youtu.be/ICQs0ebfDxY',
          },
          {
            title: '7. 평행사변형이 되는 조건',
            url: 'https://youtu.be/km2p_u_3wAI',
          },
          { title: '8. 직사각형의 성질', url: 'https://youtu.be/_7W-ugrWwFY' },
          { title: '9. 마름모의 성질', url: 'https://youtu.be/7Vn4kRm_J4s' },
          {
            title: '10. 정사각형, 사다리꼴의 성질',
            url: 'https://youtu.be/LwU9B2MwpbE',
          },
          {
            title: '11. 사각형 사이의 관계 (포함관계)',
            url: 'https://youtu.be/_Axop4PZeMM',
          },
          {
            title: '12. 닮음과 닮은 도형',
            url: 'https://youtu.be/kdeU0mM86z0',
          },
          {
            title: '13. 닮은 도형의 성질(닮음비)',
            url: 'https://youtu.be/eBsppIkZU_E',
          },
          {
            title: '14. 삼각형의 닮음 조건(SSS,SAS,AA)',
            url: 'https://youtu.be/JBgDWmDh0c8',
          },
          {
            title: '15. 삼각형의 닮음조건 - 문제풀이',
            url: 'https://youtu.be/PEpGydvKzS8',
          },
          {
            title: '16. 삼각형에서 평행선 사이의 선분의 길이의비',
            url: 'https://youtu.be/KrWv5iYMBI8',
          },
          {
            title: '17. 평행선 사이의 선분의 길이의 비',
            url: 'https://youtu.be/1FkcDEaq-us',
          },
          {
            title:
              '18. 중점연결정리 (삼각형의 두변의 중점을 연결한 선분의 성질)',
            url: 'https://youtu.be/e6Aa0ZPLHRw',
          },
          {
            title: '19. 삼각형의 무게중심 (증명)',
            url: 'https://youtu.be/xDDmIidvMwE',
          },
          {
            title: '20. 닮은 도형의 넓이의 비와 부피의 비',
            url: 'https://youtu.be/OSEjEuXOoeI',
          },
          {
            title: '21. 피타고라스 정리 (여러가지증명)',
            url: 'https://youtu.be/rk88doRPjOg',
          },
          {
            title: '22. 직각삼각형이 되기 위한 조건',
            url: 'https://youtu.be/9fZjQuooV3M',
          },
          { title: '23. 사건과 경우의수', url: 'https://youtu.be/yAlvt3JPOYc' },
          {
            title: '24. 사건A 또는 사건B가 일어나는 경우의 수',
            url: 'https://youtu.be/4rYfKz3TK28',
          },
          {
            title: '25. 두사건 A와B가 동시에 일어나는 경우의 수',
            url: 'https://youtu.be/VjX0-pc4yl0',
          },
          { title: '26. 확률', url: 'https://youtu.be/sjqWPxfisUs' },
          { title: '27. 확률의 기본성질', url: 'https://youtu.be/L9-ZMOa6C6Y' },
          {
            title: '28. 어떤 사건이 일어나지 않을 확률(여사건)',
            url: 'https://youtu.be/69yIrPedewc',
          },
        ],
      },
    },
    middle3_1: {
      name: '중3-1',
      semesters: {
        '중3-1': [
          { title: '1. 제곱근이란?', url: 'https://youtu.be/FaP51xhNQzo' },
          { title: '2. 제곱근의 성질', url: 'https://youtu.be/8XFhX3t6jEA' },
          {
            title: '3. 제곱근의 대소관계',
            url: 'https://youtu.be/ZoW2NeZDl0g',
          },
          { title: '4. 무리수란?', url: 'https://youtu.be/Lt8D4cMx_l0' },
          {
            title: '5. 제곱근의 값 –제곱근표-',
            url: 'https://youtu.be/fxbgI_BVW8M',
          },
          {
            title: '6. 실수와 수직선+대소관계',
            url: 'https://youtu.be/XU3s0pCrCmk',
          },
          { title: '7. 제곱근의 곱셈', url: 'https://youtu.be/F0sLw2ZyJjw' },
          { title: '8. 제곱근의 나눗셈', url: 'https://youtu.be/AGzL72uMPqQ' },
          { title: '9. 분모의 유리화', url: 'https://youtu.be/S8aUjZh2bSA' },
          {
            title: '10. 근호를 포함한 식의 덧셈과 뺄셈',
            url: 'https://youtu.be/jNNXphWy7yM',
          },
          { title: '11. 다항식의 곱셈', url: 'https://youtu.be/XZTva0V_42s' },
          { title: '12. 곱셈공식(1)', url: 'https://youtu.be/nD0EojYxDBQ' },
          {
            title: '13. 곱셈공식(2) -합차공식-',
            url: 'https://youtu.be/fDO0-Oquhjw',
          },
          { title: '14. 곱셈공식(3)', url: 'https://youtu.be/vW7-uuvTPl0' },
          { title: '15. 곱셈공식(4)', url: 'https://youtu.be/C1UfOe_jEEU' },
          {
            title: '16. 곱셈공식의 활용 –분모의 유리화-',
            url: 'https://youtu.be/rLVmKBEam3Q',
          },
          {
            title: '17. 인수분해란 무엇인가?',
            url: 'https://youtu.be/I9TXW-cKaLs',
          },
          {
            title: '18. 인수분해 공식(1) –완전제곱식-',
            url: 'https://youtu.be/HzRT8mkOQIA',
          },
          {
            title: '19. 인수분해 공식(2) -합차공식-',
            url: 'https://youtu.be/5jitEKJMflw',
          },
          {
            title: '20. 인수분해 공식(3)',
            url: 'https://youtu.be/WYScCBZUiEk',
          },
          {
            title: '21. 인수분해 공식(4) -인수분해하는방법최종정리-',
            url: 'https://youtu.be/FsIKumG8zOg',
          },
          { title: '22. 이차방정식이란?', url: 'https://youtu.be/bxlGJscjcWE' },
          {
            title: '23. 이차방정식의 풀이(1) –인수분해-',
            url: 'https://youtu.be/ccF_Ek2yJmQ',
          },
          {
            title: '24. 이차방정식의 풀이(2) -제곱근 활용-',
            url: 'https://youtu.be/ULUuZu2hBpU',
          },
          {
            title: '25. 이차방정식의 풀이(3) -완전제곱식 활용-',
            url: 'https://youtu.be/9J7p8q16SM0',
          },
          {
            title: '26. 근의 공식 –이차방정식-',
            url: 'https://youtu.be/Uc73UwzRbGQ',
          },
          {
            title: '27. 짝수 근의 공식(짝수공식) -증명, 유도-',
            url: 'https://youtu.be/TSFuztMrSMQ',
          },
          {
            title: '28. 이차방정식의 활용',
            url: 'https://youtu.be/fm100YmFcmY',
          },
          { title: '29. 이차함수', url: 'https://youtu.be/h84nRZilOQg' },
          {
            title: '30. 이차함수의 그래프(1)',
            url: 'https://youtu.be/y8lPAHCXB-4',
          },
          {
            title: '31. 이차함수의 그래프(2)',
            url: 'https://youtu.be/HIbb4VTVCUg',
          },
          {
            title: '32. 이차함수의 그래프(3)',
            url: 'https://youtu.be/xA9e76hYvZ4',
          },
          {
            title: '33. 이차함수의 그래프(4)',
            url: 'https://youtu.be/5G4zlLg3Jr0',
          },
          {
            title: '34. 이차함수의 그래프(5)',
            url: 'https://youtu.be/UV-jPe2FFqI',
          },
          {
            title: '35. 이차함수의 그래프(6)',
            url: 'https://youtu.be/DQVSh72nG7A',
          },
        ],
      },
    },
    middle3_2: {
      name: '중3-2',
      semesters: {
        '중3-2': [
          { title: '1. 삼각비 정의', url: 'https://youtu.be/23lplDG_nEw' },
          { title: '2. 삼각비의 값', url: 'https://youtu.be/1wJ_M0gtv-0' },
          {
            title: '3. 삼각비의 값(30도, 45도, 60도)',
            url: 'https://youtu.be/tk608FsTSMM',
          },
          {
            title: '4. 예각의 삼각비 값(0도, 90도)',
            url: 'https://youtu.be/b9TjXgJ0YeQ',
          },
          {
            title: '5. 삼각비를 활용하여 길이 구하기',
            url: 'https://youtu.be/FcKmqhajDyk',
          },
          {
            title: '6. 삼각비를 활용하여 넓이 구하기(삼각형, sin값)',
            url: 'https://youtu.be/SWuuN3su1rY',
          },
          {
            title: '7. 원의 중심과 현의 수직이등분선 사이의 관계',
            url: 'https://youtu.be/Q0lUeuCXfRs',
          },
          {
            title: '8. 원의 중심에서 현까지의 거리와 현의 길이 사이의 관계',
            url: 'https://youtu.be/nJ1v577bWQg',
          },
          { title: '9. 원의 접선의 성질', url: 'https://youtu.be/_amTqNVX7j4' },
          {
            title: '10. 원주각과 중심각 사이의 관계',
            url: 'https://youtu.be/c6eLC8EYEdM',
          },
          {
            title: '11. 원주각의 크기와 호의 길이 사이의 관계',
            url: 'https://youtu.be/dVqYROCFwNs',
          },
          {
            title: '12. 원에 내접하는 사각형의 성질',
            url: 'https://youtu.be/4-q9C3PO_jQ',
          },
          {
            title: '13. 원의 접선과 현이 이루는 각',
            url: 'https://youtu.be/7LKp7HjzJVI',
          },
          { title: '14. 대푯값', url: 'https://youtu.be/4hNWE2SWpYQ' },
          { title: '15. 중앙값', url: 'https://youtu.be/WRMGM_30kIk' },
          { title: '16. 최빈값', url: 'https://youtu.be/jySNhLEtjBo' },
          { title: '17. 산포도', url: 'https://youtu.be/yQSFdgj8HHU' },
          { title: '18. 분산과 표준편차', url: 'https://youtu.be/7Y1p6E_lAG0' },
          {
            title: '19. 분산과 표준편차(문제풀이)',
            url: 'https://youtu.be/p4T9I6Oh_Ik',
          },
          {
            title: '20. 산점도와 상관관계',
            url: 'https://youtu.be/CNVcDJe6dXA',
          },
        ],
      },
    },
  };

  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&?]+)/);
    return match ? match[1] : null;
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const currentData = activeGrade ? videoData[activeGrade] : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="text-center mb-12 mt-8">
          <img
            src="/able-logo.png"
            alt="able Education"
            className="mx-auto mb-4"
            style={{ height: '28px' }}
          />
          <div className="w-32 h-px bg-gray-300 mx-auto mb-3"></div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            옥동 에이블 수학학원
          </h1>
          <p className="text-gray-600 text-sm">개념영상 학습 시스템</p>
        </div>

        {/* Grade Tabs */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(videoData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveGrade(key)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all border-2 ${
                  activeGrade === key
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50'
                }`}
              >
                {data.name}
              </button>
            ))}
          </div>
        </div>

        {/* Video Lists */}
        {currentData && (
          <div className="space-y-6">
            {Object.entries(currentData.semesters).map(([semester, videos]) => (
              <div key={semester} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-3 border-b-2 border-indigo-200">
                  {semester}
                </h2>
                <div className="grid gap-3">
                  {videos.map((video, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleVideoClick(video)}
                      className="flex items-center justify-between p-4 bg-gray-50 hover:bg-indigo-50 rounded-lg transition-colors group"
                    >
                      <span className="text-left text-gray-700 group-hover:text-indigo-700 font-medium">
                        {video.title}
                      </span>
                      <Play className="w-5 h-5 text-indigo-600 group-hover:text-indigo-800 flex-shrink-0 ml-3" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {!activeGrade && (
          <div className="text-center py-20 bg-white rounded-lg shadow-md">
            <div className="text-gray-400 mb-3">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">학년을 선택해주세요</p>
          </div>
        )}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b bg-gray-50">
              <h3 className="text-lg font-bold text-gray-800">
                {selectedVideo.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  selectedVideo.url
                )}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
