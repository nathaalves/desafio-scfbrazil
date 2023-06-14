import { NotFoundError } from '../errors';
import { userRepository } from '../repositories/userRepository,';
import { UserType } from '../types/userTypes';

const getUser = (name: string) => {
  const user = userRepository.findByName(name);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return user;
};

const getUsers = () => {
  const users = userRepository.findAll();

  return users;
};

const createUser = (user: any) => {
  const newUser = userRepository.insert(user);

  return newUser;
};

const removeUser = (name: string) => {
  const deletedUser = userRepository.deleteByName(name);

  if (!deletedUser) {
    throw new NotFoundError('User not found');
  }

  return deletedUser;
};

const updateUser = (id: string, userData: UserType) => {
  const updatedUser = userRepository.update(id, userData);

  if (!updatedUser) {
    throw new NotFoundError('User not found');
  }

  return updatedUser;
};

const getReadCount = (name: string) => {
  const user = userRepository.findByName(name, false);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  return `Usuário ${user.name} foi lido ${user.readCount} vezes.`;
};

export const userService = {
  getUser,
  getUsers,
  createUser,
  removeUser,
  updateUser,
  getReadCount,
};
