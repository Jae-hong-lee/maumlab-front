# Nextron Chat App

React의 SSR을 쉽게 구현할 수 있게 NextJS를 이용하고 모바일 환경에서 실행되는 앱을 데스크탑 환경에서 개발하고자 Electron을 사용하여 사내에서 서비스할 수 있는 채팅앱을 만들었습니다.

[Nextron](https://github.com/saltyshiomix/nextron)

## 사용 기술

```
yarn(5.1.1),react(18.2.0), next(12.3.4), nextron(8.4.0), firebase,
recoil(0.7.6), emotion(11.10.5), mui/material(5.11.4), yup(0.32.11),
react-hook-form(7.42.1)
```

## Create an App

```
# with npx
$ npx create-nextron-app my-app --example basic-javascript

# with yarn
$ yarn create nextron-app my-app --example basic-javascript

# with pnpx
$ pnpx create-nextron-app my-app --example basic-javascript
```

## Commit Message Convention

| Tag Name | Description                  |
| -------- | ---------------------------- |
| feat     | 새로운 기능을 추가할 경우    |
| fix      | 버그를 고친 경우             |
| design   | CSS 등 사용자 UI 디자인 변경 |
| comment  | comment 추가                 |

`Ex ) feat:로그인, 회원가입 UI `

## 시연영상

#### 로그인

![Login](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/72c80f32-2296-4411-9d2f-e9687c604e73)

#### 회원가입

![SignUp](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/e770d371-c2e5-458a-9369-ed7b60fe0fb2)

#### 채팅방 생성 1:1

|                                                    채팅생성                                                     |                                                   채팅하기(A)                                                   |
| :-------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------: |
| ![Chat 1-1](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/e9e77fd5-ef2e-47f1-b2a4-9df8a9ab6b39) | ![Chat 1-2](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/7e8deeda-7214-4ea2-9a91-52037b0c7785) |
|                                                   채팅하기(B)                                                   |
| ![Chat 1-3](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/88d1247e-03fd-4890-83c4-d3c6f07b8199) |

#### 채팅방 생성 1:N

|                                                  채팅생성                                                  |                                                채팅하기(A)                                                 |
| :--------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------: |
| ![2-1](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/cafbda38-1413-46a0-a22c-706daa7d6316) | ![2-2](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/ca46a5ae-d560-4841-a545-6a0bbe57b90a) |
|                                                채팅하기(B)                                                 |                                                채팅하기(C)                                                 |
| ![2-3](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/fa056949-026a-472d-8c11-561bee2dcf9a) | ![2-4](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/fb0b2b9f-e53a-444c-bc55-fc153047dabc) |

#### 즐겨찾기

![Favorite](https://github.com/Jae-hong-lee/maumlab-front/assets/72030487/1c8ea795-8959-42ef-be37-ecc0c949a314)
