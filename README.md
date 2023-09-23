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

**`pages/boards/new/index.ts`**
**`pages/boards/[boardId]/edit/index.ts`**

- 게시물 작성 및 수정 (`BoardWrite`)

  - 사용자는 입력을 받기 위한 여러 상태값(`useState`)을 관리합니다.
  - 입력 검증 후, Apollo Client의 `useMutation`을 사용하여 서버로 게시물 생성 및 수정 요청을 보냅니다.
    ![게시물등록_0923](https://github.com/minngaeng/board/assets/124495210/c976f452-101f-4656-a841-2a3e1bbb15c3)
    ![수정하기_0923](https://github.com/minngaeng/board/assets/124495210/5e2cc007-5929-4d29-bb51-15d1378c5d4e)

**`pages/boards/index.ts`**

- 게시물 목록 (`BoardList`)

  - `Apollo Client`의 `useQuery`를 사용하여 목록을 서버에서 가져온다.

**`pages/boards/[boardId]/index.ts`**

- 게시물 상세 (`BoardDetail`)

  - url의 `boardId`파라미터를 사용하여 해당 게시물의 상세 정보를 조회합니다.
  - 삭제 버튼을 클릭하면, Apollo Client의 `useMutation`을 사용하여 서버로 게시물 삭제 요청을 보냅니다.
    ![목록_0923](https://github.com/minngaeng/board/assets/124495210/6c34c427-05f8-4d5a-9ceb-a2c1861bf87b)

### 2. 댓글 CRUD

#### [구현 방법 및 주요 기능과 로직]

**`pages/boards/[boardId]/index.ts`** /

- 댓글 작성 및 수정 (`BoardCommentWrite`)
  - `createBoardComment`/`updateBoardComment` 뮤테이션을 통해 새 댓글 및 기존 댓글을 수정합니다.

**`pages/boards/[boardId]/index.ts`** /

- 댓글 목록 (`BoardCommentList`)
  - 댓글을 표시할 게시물의 ID(`router.query.boardId`) 유효한지 확인 후 Apollo Client 의 `useQuery`를 사용하여 게시물에 대한 댓글 데이터를 가져옵니다.
  - 무한스크롤 기능을 하는 `loadFunc`을 통해 더 많은 댓글을 로드할 수 있습니다.
    ![댓글등록_0923](https://github.com/minngaeng/board/assets/124495210/5e700535-4395-455a-9b9f-6c24f81e733d)
    ![댓글 수정_0923](https://github.com/minngaeng/board/assets/124495210/adc26e98-020f-4f65-87d1-bd659825d258)

### 3. 게시물 목록 페이지네이션

#### [구현 방법 및 주요 기능과 로직]

**`src/components/commons/paginations/01`** /

- 데이터 페칭과 상태 관리를 위해 Apollo Client 의 `useQuery`와 `refetch`를 사용합니다.
  ![pagination_0923](https://github.com/minngaeng/board/assets/124495210/63749334-69da-4bd1-ac72-12af4ee58624)
