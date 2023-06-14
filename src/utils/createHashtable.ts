import { UserType } from '../types/userTypes';

type HashTableType = {
  [key: string]: number;
};

type KeyType = keyof Omit<UserType, 'readCount'>;

export function createHashtable(key: KeyType, data: UserType[]) {
  const hashtable: HashTableType = {};

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const keyName = item[key];
    hashtable[keyName] = i;
  }

  return hashtable;
}
