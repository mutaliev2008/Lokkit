import { User } from '../models/user.model';

export const usersData: User[] = [
  {
    id: 1,
    name: 'John Doe',
    avatar:
      'https://avatars.mds.yandex.net/i?id=b3538dc07073a146df374965ab2f7c1f452890a9-4908143-images-thumbs&n=13',
    email: 'john.doe@example.com',
    isActive: false,
  },
  {
    id: 2,
    name: 'Jane Smith',
    avatar:
      'https://assets.prophotos.ru/data/articles/0001/5443/82379/original.jpg',
    email: 'jane.smith@example.com',
    isActive: false,
  },
  {
    id: 3,
    name: 'Alice Johnson',
    avatar:
      'https://avatars.mds.yandex.net/i?id=21cc8e0f0a3115c4032b7f47974f1cc64a97d0889dc0f78f-5451798-images-thumbs&n=13',
    email: 'alice.johnson@example.com',
    isActive: false,
  },
  {
    id: 4,
    name: 'Magomed-Bashir',
    avatar:
      'https://chatgptchatapp.com/storage/generate-images/12-02-2025/01f03f23a2a8d8998b098dadbf688de8/3348092fe41daa6c1c257e07d39a792b.jpg',
    email: 'maga@example.com',
    isActive: true,
  },
];
