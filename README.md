# chorok
초록초록의 밑바탕

## Set Up

### 1.0 Setting up the project

- Install 
    - graphql-yoga
    - nodemon
        - nodemon.json
            - ext: nodemon이 감시해야 할 파일의 확장자를 지시
    - babel
    
> 팁: 여러개 설치할 때
```
yarn add @bable/{node, preset-env}
```
    
### 1.1 Creating GraphQL server

- Install
    - dotenv: .env 파일에 정의된 설정을 불러올 수 있음
- 사용법 테스트
    - [graphql-yoga: Usage](https://github.com/prisma-labs/graphql-yoga#quickstart-hosted-demo)
    - qraphql client에서 hello 호출 테스트
    
### 1.2 Setting up the server like the Props

graphql type, resolver 디렉토리 구조 설계

- Install
    - graphql-tools, merge-graphql-schemas
- schema.js
    - 분리된 type, resolver들을 import -> merge
    - server.js 파일에서 이 파일만 감시할 수 있도록
- api/**/*
    - api 폴더 밑에는 resolver나 graphql이 아닌 파일만 둔다

## Setting up Prisma

### 2.0 Introduction to Prisma

- Prisma: ORM(Object-relational mapping)
- DB 관련 문제를 해결한다.(어떻게?)

