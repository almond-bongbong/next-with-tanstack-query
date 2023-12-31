# Next with tanstack query

## Questions

- [x] 기본적인 캐시 저장소는 어디에 위치하나? 새로고침시 캐시가 초기화 되는가?
  - 기본적으로 메모리에 저장되며 새로고침시 초기화 된다.
  - 그러나 캐시 persist에 대한 옵션을 제공하는 듯 하다.
- [x] Default `staleTime`이 `0`이라면 다음 요청시 한번은 캐시에서 조회하고 백그라운드 요청을 보내는건가?
  - [x] 백그라운드에서 refetch가 발생하고 만약 데이터가 변경되었다면 리렌더링이 발생할 것으로 예상 (테스트 필요)
  - 탭 이동으로 테스트해 보았다. 예상대로 백그라운드에서 refetch되고 데이터가 변경되었다면 리렌더링이 발생한다.
- [x] [필터링 예제](https://www.notion.so/max-lee/React-Query-3d620a8b84754e559d05e42fa45ba1a8?pvs=4)에서 `initialData` 이용시 fetch도 발생하는지 확인 필요
  -  fetch도 발생한다. 🙆
- [x] retry 관련해서는 어떻게 처리하는지 확인 필요 (기본값 확인)
  - 3번(기본값)의 재시도를 한다. 그래서 총 4번의 요청이 발생한다.
  - `error`객체는 `retry`가 모두 실패했을 때 채워진다.
  - `retryDelay` 기본값은 1초 > 2초 > 4초로 백오프 지연이 적용된다.
- [ ] SSR 에서 어떻게 작동하는지? (retry 또한 적용되는지?)
- [ ] isFetching, isLoading 동작 확인
