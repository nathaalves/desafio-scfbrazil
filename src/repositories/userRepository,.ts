import data from '../data/fakeData';
import { UserType } from '../types/userTypes';

import { createHashtable } from '../utils/createHashtable';

const userNameHashtable = createHashtable('name', data);
const userIdHashtable = createHashtable('id', data);

const updateReadCount = (user: UserType, index: number) => {
  if (!user?.readCount) {
    data[index] = { ...user, readCount: 1 };
  } else {
    user.readCount++;
  }

  return data[index];
};

const findByName = (name: string, updateCount = true) => {
  const index = userNameHashtable[name];
  const user = data[index];

  if (user && updateCount) {
    updateReadCount(user, index);
  }

  return data[index];
};

const findAll = () => {
  return data;
};

const insert = (user: UserType) => {
  const id = data[data.length - 1].id + 1;

  const newUser = { ...user, id, readCount: 0 };

  data.push(newUser);

  userNameHashtable[user.name] = data.length - 1;
  userIdHashtable[id] = data.length - 1;

  return newUser;
};

const deleteByName = (name: string) => {
  const index = userNameHashtable[name];

  if (!index) {
    return;
  }

  const deletedUser = data.splice(index, 1)[0];

  delete userNameHashtable[deletedUser.name];
  delete userIdHashtable[deletedUser.id];

  return deletedUser;
};

const update = (id: string, userData: UserType) => {
  const index = userIdHashtable[id];

  if (!index) return;

  const user = data[index];

  const updatedUser = { ...user, ...userData };

  data[index] = updatedUser;

  userNameHashtable[updatedUser.name] = index;
  delete userNameHashtable[user.name];

  return updatedUser;
};

export const userRepository = {
  findByName,
  findAll,
  insert,
  deleteByName,
  update,
};
