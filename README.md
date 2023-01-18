# 마음연구소 프론트 코딩테스트

### 사용 기술

```
yarn(5.1.1),react(18.2.0), next(12.3.4), nextron(8.4.0), firebase(), git
```

```
recoil(0.7.6), emotion(11.10.5), mui/material(5.11.4), yup(0.32.11),
react-hook-form(7.42.1)
```

### Create an App

```
# with npx
$ npx create-nextron-app my-app --example basic-javascript

# with yarn
$ yarn create nextron-app my-app --example basic-javascript

# with pnpx
$ pnpx create-nextron-app my-app --example basic-javascript
```

### Install Dependencies

```
$ cd maumlab-front

# using yarn or npm
$ yarn (or `npm install`)

# using pnpm
$ pnpm install --shamefully-hoist
```

### Use it

```
# development mode
$ yarn dev (or `npm run dev` or `pnpm run dev`)

# production build
$ yarn build (or `npm run build` or `pnpm run build`)
```

### Commit Message Convention

| Tag Name | Description                  |
| -------- | ---------------------------- |
| feat     | 새로운 기능을 추가할 경우    |
| fix      | 버그를 고친 경우             |
| design   | CSS 등 사용자 UI 디자인 변경 |
| comment  | comment 추가                 |

`Ex ) feat:로그인, 회원가입 UI `
