### [Implement bulletin board CRUD & comment functions with Next.js ... (Tentative) ]

<br />

![div](https://github.com/minngaeng/board/assets/124495210/bb4131cd-d872-4373-9151-485cbfbbdf20)

### 프로젝트 소개

Post CRUD function has been created first with the deployed api.Currently, ver. is even implemented to register and delete comments on the post details page.

게시물 CRUD 기능을 중심으로 우선 제작 되었습니다. 현재 ver. 은 게시물 상세 페이지에서 댓글을 등록하고 삭제하는 기능까지 구현이 되어있습니다.

#### 사용된 기술 스택

- Next.js
- Apollo Client

### 시작 가이드

#### Installation

```bash
$ git clone
$ yarn install
$ yarn dev
```

### 주요 특징 및 진행사항과 계획

### 1. 게시물 CRUD

#### [구현 방법 및 주요 기능과 로직]

![게시물](https://github.com/minngaeng/board/assets/124495210/eebd8ea4-b80b-49ca-bada-838580890d92)

- 게시물 작성 (`BoardWrite`) **`pages/boards/new/index.ts`**

  - 사용자는 입력을 받기 위한 여러 상태값(`useState`)을 관리합니다.
  - 입력 검증 후, Apollo Client의 `useMutation`을 사용하여 서버로 게시물 생성 요청을 보냅니다.

- 게시물 목록 (`BoardList`) **`pages/boards/index.ts`**

  - `Apollo Client`의 `useQuery`를 사용하여 목록을 서버에서 가져온다.

- 게시물 상세 (`BoardDetail`) **`pages/boards/[boardId]/index.ts`**

  - url의 `boardId`파라미터를 사용하여 해당 게시물의 상세 정보를 조회합니다.
  - 삭제 버튼을 클릭하면, Apollo Client의 `useMutation`을 사용하여 서버로 게시물 삭제 요청을 보냅니다.


