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

### 2.2 Testing Prisma OMG

Playground에서 데이터 조작

#### user 찾기

```http request
{
  user(where: {id: ""}) {
    userName
  }
}
```

#### user 추가하기

```http request
mutation {
  createUser (data: {userName: "a", email: "a@gmail.com"}) {
    id
  }
}
```

#### Following 추가하기

```http request
mutation {
  updateUser(data: {following:{
    connect: {
      id: ""
    }
  }} where: {id: ""}) {
    firstName
    lastName
    following {
      id
    }
    followers {
      id
    }
  }
}
```

### 2.3 Integrating Prisma in our Server

- [Prisma 사용하여 5분만에 ORM 레이어 생성하기](https://medium.com/withj-kr/prisma-prisma-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-5%EB%B6%84%EB%A7%8C%EC%97%90-orm-%EB%A0%88%EC%9D%B4%EC%96%B4-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0-154f9c766605)

```
// prisma.yml

generate:
  - generator: javascript-client
    output: ./generated/prisma-client/
```

위 컨피겨레이션을 추가함으로써 자바스크립트 클라이언트를 생성하고 해당 클라이언트를 ./generated/prisma-client/에 매번 업데이트하게 됩니다.

```
prisma generate
```

위 코드 실행이 완료되면 generated 폴더와 하위 폴더 prisma-client가 생성되는데 그 안에는 prisma에서 생성한 GraphQL 스키마를 담고 있습니다.

#### 예제

```
import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        sayHello: async () => {
            console.log(await prisma.users());
            return "Hello"
        }
    }
};
``` 

### 2.5 Resolvers with Prisma
 
#### prisma fragment

- [인스타클론코딩 Server.15 - fragment를 이용한 데이터접근](https://13akstjq.github.io/clonecoding/2019/06/26/%EC%9D%B8%EC%8A%A4%ED%83%80-%EC%84%9C%EB%B2%84-15-fragment%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%91%EA%B7%BC.html)

 graphql는 서버의 공격를 막기위해 데이터를 깊게 접근할 수 없도록 해놓은 것을 해결하기 위해 사용하는 것입니다. fragment를 지정해줌으로 데이터에 깊게 접근할 수 있습니다.
