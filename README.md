# 🐘(코)딩하는 사람 (끼)리 (스)터디🐘

## 1️⃣프로젝트 소개💼
- 프로젝트 기간 2024-07-02 ~ 2024-08-16 (약 6주) 
- 서비스 소개: 알고리즘 스터디와 게임을 결합한 웹 컴파일러 기반 학습 플랫폼
- 도입 배경
    - 코딩 교육이 의무화되고 코딩 테스트 평가를 도입하는 기업이 늘어나는 등 알고리즘 학습의 중요성이 대두되고 있음
    - 기존의 스터디 환경에서 느끼는 불편함을 개선하여 보다 효율적인 알고리즘 학습 스터디 플랫폼에 대한 필요성을 느낌
- 목적
    - 알고리즘 학습과 Gamification 요소를 결합하여 학습 동기와 성과를 향상하는 웹 기반 플랫폼을 만드는 것을 목표로 함

## 2️⃣기술스택📱
![기술스택](resources/기술스택.png)

## 3️⃣아키텍처🔗
![아키텍처](resources/아키텍처.png)

## 4️⃣화면 소개💻

### 메인 페이지
#### 메인
- 로그인 후 나타나는 메인 페이지입니다.


<img src="https://github.com/user-attachments/assets/eb89094e-4cdd-4b0c-a386-5453502c2c51" style="width:2000px; height:auto;" alt="일일미션">


#### 마이 페이지


- 내 정보를 확인하고 푼 문제를 확인할 수 있습니다.
- 비밀번호 변경이나 코드 리뷰 작성으로 이동할 수 있습니다.

![마이페이지](resources/기능_마이페이지.png)

#### 비밀번호 변경
![비밀번호변경](resources/기능_비밀번호변경.png)

#### 비밀번호 인증 코드
![비밀번호인증코드](resources/기능_비밀번호인증.PNG)

#### 비밀번호 초기화
![임시비번](resources/기능_임시비밀번호발급.PNG)

#### 일일 미션
- 일일 미션을 통해 플랫폼에 자체에 재미를 더합니다.

<img src="https://github.com/user-attachments/assets/bcc890dd-5b9c-43de-958d-2e24f7bbfbf2" style="width:2000px; height:auto;" alt="일일미션">


#### 친구 추가

<img src="https://github.com/user-attachments/assets/4ef737e0-0099-4b1c-bc1c-e68f922a7004" style="width:2000px; height:auto;" alt="친구추가 초대">

### 스터디 모집 게시판
##### 스터디 모집
- 이름, 규칙, 시간을 설정하여 원하는 스터디를 만들고 스터디원을 모집할 수 있습니다.

##### 스터디 가입
- 스터디 목록에서 스터디를 선택하고 해당 스터디에 대한 정보를 확인하여 가입 신청할 수 있습니다.

<img src="https://github.com/user-attachments/assets/58187d1f-6b38-4e52-bac3-aed3387ace43" style="width:2000px; height:auto;" alt="친구추가 초대">

### 문제 목록 페이지
#### 문제 목록
- 플랫폼에서 이용할 수 있는 알고리즘 문제 목록과 상세 정보를 확인할 수 있습니다.

![문제목록](resources/기능_문제목록.png)

#### 리뷰 작성

- 사용자들이 풀이한 문제에 대해 리뷰를 작성할 수 있습니다. AI가 코드를 보고 자동 작성을 할 수도 있습니다.

<img src="https://github.com/user-attachments/assets/8e4e0ef0-18a2-43cb-877e-fe62d847fcf1" style="width:2000px; height:auto;" alt="친구추가 초대">

<img src="https://github.com/user-attachments/assets/0e3aa540-0d3c-4875-8333-a4c8a8ca1d37" style="width:2000px; height:auto;" alt="친구추가 초대">



#### 리뷰 공유 및 댓글 기능
- 사용자들이 해결한 문제에 대해 코드 리뷰를 작성하면 코드와 코드 리뷰가 공유되어 알고리즘 실력을 향상시킬 수 있습니다.

- 공유된 코드 리뷰에 대해서 댓글을 작성하고 알고리즘적 소통을 통해 알고리즘 실력을 향상시킬 수 있습니다.


<img src="https://github.com/user-attachments/assets/a84e9db6-747a-41ca-922d-ec7ad786a565" style="width:2000px; height:auto;" alt="친구추가 초대">


<img src="https://github.com/user-attachments/assets/95499336-33b0-4909-acfe-84e3f78f2e95" style="width:2000px; height:auto;" alt="친구추가 초대">



### 스터디 대기 페이지

#### 스터디 대기
- 스터디 대기 방에서 문제를 선택하고 친구를 초대할 수 있습니다.

<img src="https://github.com/user-attachments/assets/58e4ef99-1606-4f01-b9c6-7fbd8ee33bd4" style="width:2000px; height:auto;" alt="친구추가 초대">


### 스터디 진행 페이지

<img src="https://github.com/user-attachments/assets/66dafcb1-618b-4cae-a9df-02fffbaee872" style="width:2000px; height:auto;" alt="친구추가 초대">

#### 웹 컴파일러
- 스터디 진행 중 코드와 입력을 작성하여 실행하거나, 제출하여 컴파일한 결과를 받을 수 있습니다.

![스터디웹컴파일](resources/기능_스터디웹컴파일2.png)
#### 자동완성
- 웹 컴파일러에 자동완성을 제공하여 편의성을 향상시킵니다.

![스터디자동완성](resources/기능_스터디자동완성.png)
#### 문제 힌트
- 생성형 AI를 활용하여 문제에 대한 힌트를 제공받고 문제를 해결하여 알고리즘 실력을 향상시킬 수 있습니다.

<img src="https://github.com/user-attachments/assets/2f4f8125-ea46-4a23-941a-532ac341db6c" style="width:2000px; height:auto;" alt="친구추가 초대">

#### 코드 공유
- 스터디 진행 간 작성한 코드를 즉시 공유하여 스터디의 편의성을 높이고 알고리즘적 소통을 지원합니다.

![스터디코드공유](resources/기능_스터디코드공유.png)

### 게임 대기 페이지
#### 게임 대기
- 사용자가 알고리즘 난이도를 설정하면 랜덤한 문제가 출제됩니다.

#### 친구 초대
- 친구를 초대하여 함께 알고리즘 게임을 진행할 수 있습니다.


<img src="https://github.com/user-attachments/assets/12f0507c-7dbf-4852-9f4d-1f7bb148e54e" style="width:2000px; height:auto;" alt="친구추가 초대">




### 게임 진행 페이지
#### 게임 진행
- 게임적 요소를 추가하여 사용자에게 아이템을 부여하고 타이머를 통해 긴장감을 부여합니다.


#### 게임 아이템
- 제공받은 아이템은 특정 유저를 지정하여 한 번 사용할 수 있습니다.


<img src="https://github.com/user-attachments/assets/5f6cf2e5-9a06-4410-8627-6e4a8d955686" style="width:2000px; height:auto;" alt="친구추가 초대">


#### 게임 결과
- 문제의 제출 기록과 채점 결과를 볼 수 있으며, 맞춘 사용자가 3명이상 나오면 게임이 종료되고 게임 결과가 출력됩니다.


<img src="https://github.com/user-attachments/assets/0931f7bc-0751-414b-a6c6-404e8ec2da1e" style="width:2000px; height:auto;" alt="친구추가 초대">


### 로그인, 회원가입 페이지
#### 로그인
- 사용자 로그인 기능을 제공합니다.

![로그인](resources/기능_로그인.png)

#### 비밀번호 찾기
- 이메일 인증을 통해 초기화된 비밀번호를 제공받습니다.

![비밀번호찾기기](resources/기능_비밀번호찾기.png)

#### 회원가입
- 이메일 인증을 통해 이메일 유효성을 확인하고 보안을 강화합니다.

![회원가입](resources/기능_회원가입.png)

#### 유효성 확인

![유효성확인](resources/기능_회원가입인증.PNG)

## 5️⃣산출물🗂️

### 요구사항 명세서
![요구사항명세서](resources/산출물_요구사항명세서.png)

### 목업
![목업업](resources/산출물_목업.png)

### ERD
![ERD](resources/산출물_erd.png)

### API 명세서
![API명세서](resources/산출물_api명세서.png)

## 6️⃣기대 효과📈
- 기술적 기대효과
    - 화상회의, 웹 크롤링, 웹 컴파일러, 코드 공유를 융합함으로써 사용자 경험 개선
    - OpenAI API를 사용함으로써 즉각적인 피드백 가능
- 경제적 기대효과
    - 점진적으로 늘어가는 알고리즘 관심도와 비례하여 수익성 증가
    - 사용자 측면에서 온라인 스터디가 증가하여 스터디 비용 감소
- 사회적 기대효과
    - ssafy 후배들에서 배포함으로써 알고리즘 스터디의 질 향상
    - ChatGPT의 지속적인 코드 평가로 사용자들의 실력 향상
    - 게임적 요소를 넣어 스터디 유지력 상승

## 7️⃣개발 환경🛠️
- Front-End
    - Vue.js 3.4.29
    - Vue-router 4.3.3
    - Pinia 2.1.7
    - Openvidu Browser 2.30.0
    - Npm 10.5.0
    - Node 20.12.2
    - Javascript
    - HTML5
    - CSS3
- Back-End
    - Java 17.0.12
    - Spring Boot 3.3.2
    - Spring data JPA 3.3.2
    - Spring Thymeleaf 3.3.2
    - Spring Web 3.3.2
    - Spring Web Services 3.3.2
    - Spring Websocket 3.3.2
    - Spring Webflux 3.3.2
    - Spring Mail 3.3.2
    - MyBatis 3.0.3
    - Jackson 2.16.1
    - Jsoup 1.15.3
    - Lombok 1.18.28
    - Openvidu-java-client 2.30.0
    - MySQL 8.0.37
    - JPA
    - Gradle
- Infra
    - Docker
    - Docker Compose
    - Openvidu 2.23.0
    - NginX
    - Ubuntu 22.04
    - Jenkins

## 8️⃣개발 도구🛠️
- 이슈 관리
    - JIRA
- 형상 관리
    - Gitlab
- 커뮤니케이션 도구
    - Notion
    - Mattermost
- 디자인
    - Figma
- UCC
    - 프리미어 프로
- 개발 툴
    - VS Code 1.90.2
    - IntelliJ IDEA 2024.1.4
- 기타 툴
    - Postman 11.7.0
