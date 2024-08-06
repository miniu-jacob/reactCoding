// localforage 모듈을 임포트하여 브라우저의 IndexedDB, WebSQL, localStorage 
// 와 같은 저장소를 쉽게 다룰 수 있다. 
import localforage from "localforage";

// matchSorter 모듈을 불러와서 배열을 주어진 키와 일치하는 문자열로 필터링한다. 
import { matchSorter } from "match-sorter";

// 배열을 주어진 키에 따라 정렬한다.
import sortBy from "sort-by";

// query 에 따라 연락처 목록을 가져오는 비동기 함수
export async function getContacts(query) {

    // 네트워크 요청을 시뮬레이션하는 fakeNetwork 함수를 호출한다. 
  await fakeNetwork(`getContacts:${query}`);

    // IndexedDB 에서 'contacts' 키에 해당하는 항목을 가져온다.
  let contacts = await localforage.getItem("contacts");

    // 가져온 배열이 없다면 빈배열 초기화
  if (!contacts) contacts = [];

    // 쿼리가 있다면 연락처 목록을 검색어(query)로 필터링한다.
  if (query) {
    contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
  }

  // 연락처 목록을 (last와 createdAt 키에 따라 정렬하여 반환한다.)
  return contacts.sort(sortBy("last", "createdAt"));
}

// 새로운 연락처를 생성하는 비동기 함수 
export async function createContact() {
    // 네트워크 요청을 시뮬레이션하는 fakeNetwork 함수를 호출
  await fakeNetwork();

  // 랜덤 아이디 생성 
  let id = Math.random().toString(36).substring(2, 9);

  // 새로운 연락처 객체 생성
  let contact = { id, createdAt: Date.now() };
  // 현재 저장된 연락처 목록을 가져옴 
  let contacts = await getContacts();
  // 새로운 연락처를 목록의 맨 앞에 추가
  contacts.unshift(contact);
  // 업데이트된 연락처 목록을 저장 
  await set(contacts);
    // 생성된 연락처를 반환
  return contact;
}


// 주어진 ID 에 해당하는 연락처를 가져오는 비동기 함수
export async function getContact(id) {
    // fakeNetwork 호출
  await fakeNetwork(`contact:${id}`);
  // IndexDB 에서 'contacts' 키에 해당하는 항목을 가져온다. 
  let contacts = await localforage.getItem("contacts");
  // 주어진 아이디에 해당하는 연락처를 찾는다.
  let contact = contacts.find(contact => contact.id === id);
  // 존재하면 연락처를 반환하고 없으면 null
  return contact ?? null;
}


export async function updateContact(id, updates) {
  await fakeNetwork();
  let contacts = await localforage.getItem("contacts");
  let contact = contacts.find(contact => contact.id === id);
  if (!contact) throw new Error("No contact found for", id);
  // 연락처 객체에 업데이트 내용을 병합한다. 
  Object.assign(contact, updates);
  // 연락처 목록 저장
  await set(contacts);
  return contact;
}

// ID 에 해당하는 연락처 삭제
export async function deleteContact(id) {
  let contacts = await localforage.getItem("contacts");
  // 인덱스를 찾고 
  let index = contacts.findIndex(contact => contact.id === id);
  // 연락처가 유효하면 연락처를 목록에서 삭제한다. 
  if (index > -1) {
    contacts.splice(index, 1);
    await set(contacts);
    return true;
  }
  return false;
}


// 연락처 목록을 IndexedDB 에 저장
function set(contacts) {
  return localforage.setItem("contacts", contacts);
}

// fake a cache so we don't slow down stuff we've already seen
// 네트워크 요청을 시뮬레이션하여 캐싱을 처리한다. 
let fakeCache = {};

// 키를 사용하여 네트워크 요청을 시뮬레이션한다. 
async function fakeNetwork(key) {
    // 키가 없으면 faceCache를 초기화한다. 
  if (!key) {
    fakeCache = {};
  }

  // 이미 캐시된 key 가 있다면 함수를 종료한다. 
  if (fakeCache[key]) {
    return;
  }

  // key를 캐시하고 랜덤한 지연 시간을 시뮬레이션한다. 
  fakeCache[key] = true;
  return new Promise(res => {
    setTimeout(res, Math.random() * 800);
  });
}