### [Implement bulletin board CRUD & comment functions with Next.js ... (Tentative) ]

<br />

![div](https://github.com/minngaeng/board/assets/124495210/9ba49864-dfb0-469f-831f-9ab171acbb56)

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

#### 주요 특징 및 진행사항과 계획

- 게시물 CRUD : 게시물을 작성,조회,수정,삭제할 수 있습니다. 각 게시물은 고유 ID 를 가지며 상세 페이지에서 확인이 가능합니다.
- 댓글 관리 기능 : 게시물에 사용자들의 의견이나 피드백을 댓글 형태로 남길 수 있습니다. 작성자는 댓글 삭제의 권한을 가지고 있습니다.
- 타입 관리 : Codegen 을 통해 생성된 타입들의 안정성을 높입니다.
- 다가오는 업데이트 : 이미지 파일 업로드 기능, 카카오 지도 API 의 활용 등 다양한 기능을 추가할 예정입니다.
