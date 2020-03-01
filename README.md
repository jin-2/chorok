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
    - [Prisma의 특징은 GraphQL스키마를 기반으로 DB를 자동생성 해준다는 것입니다.](https://velog.io/@alskt0419/ORM%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C...-iek4f0o3fg)

1. Sing in
1. Create service하게 되면 next step을 알려준다
1. generated 폴더는 .gitignore에 추가
1. datamodel.prisma 파일에 field를 추가하고 `prisma deploy` 실행하면 DB에 반영

