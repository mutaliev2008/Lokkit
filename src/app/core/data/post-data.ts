import { Post } from '../models/post.model';

export const postsData: Post[] = [
  {
    id: 1,
    authorId: 1,
    userName: 'X_AE_A-13',
    firstName: 'Maga',
    secondName: 'Лукашенко',
    userAvatar:
      'https://avatars.mds.yandex.net/i?id=f4153aaa9961c73e5f9548a1575b4462_l-7450098-images-thumbs&n=13',
    role: 'Дизайнер продуктов',
    post_image:
      'https://avatars.mds.yandex.net/i?id=1478920f8b60ff44ba76782e055fb1a0ea9b73d1-8474988-images-thumbs&n=13',
    post_content:
      'Habitant morbi tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra. Dolor morbi non arcu risus quis varius.',
    hashtags: [
      '#удивительно',
      '#великолепно',
      '#навсегда',
      '#uiux',
      '#машинноеобучение',
    ],
    likes: 12,
    comments: [
      {
        id: 1,
        authorId: 2,
        userName: 'User2',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=a4221ddb1fcf383d3c26c9f7f808826d0f331f51-5876515-images-thumbs&n=13',
        content: 'Классно! Это точно сделано.',
        createdAt: new Date('2022-01-01T12:00:00'),
      },
      {
        id: 2,
        authorId: 3,
        userName: 'User3',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=3b83edd970d73574b3f48b50ad71b702d59af46a-5520044-images-thumbs&n=13',
        content: 'Мне нравится, но я не очень доволен.',
        createdAt: new Date('2022-01-02T10:30:00'),
      },
      {
        id: 3,
        authorId: 4,
        userName: 'User4',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=44ee05a9dd86b08c3572f577c3fd8ec118fecd74-7761267-images-thumbs&n=13',
        content:
          'Мне нравится, но я не очень доволен. Может ты хочешь попробовать другие акции?',
        createdAt: new Date('2022-01-03T09:45:00'),
      },
    ],
    shares: 187,
  },
  {
    id: 2,
    authorId: 2,
    userName: 'CR7',
    firstName: 'Cristian',
    secondName: 'Ronaldo',
    userAvatar:
      'https://avatars.mds.yandex.net/i?id=cbd80f5d76ac6ac3599ba4f60401a06ee6b35f19-10842658-images-thumbs&n=13',
    role: 'Футболист',
    post_image:
      'https://avatars.mds.yandex.net/i?id=75bddd3fedc67219e1639b7080d1c2c53df6559c-10808639-images-thumbs&n=13',
    post_content:
      'Я как всегда лучший и конечно я лучше чем этот ваш Месси. Сегодня была отличная игра особенно мой гол на последних минутах он был лучший.А ваш Месси так может?',
    hashtags: ['#ronaldo', '#cr7', '#роналду', '#Real Madrid', '#better'],
    likes: 18,
    comments: [
      {
        id: 1,
        authorId: 3,
        userName: 'User3',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=a4221ddb1fcf383d3c26c9f7f808826d0f331f51-5876515-images-thumbs&n=13',
        content: 'Это замечательный пост! Мне очень нравится.',
        createdAt: new Date('2022-01-04T15:00:00'),
      },
    ],
    shares: 213,
  },
  {
    id: 3,
    authorId: 3,
    firstName: 'Madina',
    secondName: 'Sagova',
    userName: 'CreativeCoder42',
    role: 'Frontend-разработчик',
    userAvatar:
      'https://avatars.mds.yandex.net/i?id=9f55625213a58aaf8d7967d5713155e90ecbca7f-5221961-images-thumbs&n=13',
    post_image: '',
    post_content:
      'Сегодня закончил работу над новым проектом. Очень горжусь результатом! Вдохновение приходит, когда видишь, как твой код оживает на экране.',
    hashtags: [
      '#программирование',
      '#вдохновение',
      '#frontend',
      '#код',
      '#успех',
    ],
    likes: 45,
    comments: [
      {
        id: 1,
        authorId: 4,
        userName: 'User4',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=4567890123456789012345678901234567890123-10808639-images-thumbs&n=13',
        content: 'Прекрасный проект! Мне очень нравится.',
        createdAt: new Date('2022-01-05T12:30:00'),
      },
      {
        id: 2,
        authorId: 5,
        userName: 'User5',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=3b83edd970d73574b3f48b50ad71b702d59af46a-5520044-images-thumbs&n=13',
        content: 'Классный дизайн! Мне очень нравится.',
        createdAt: new Date('2022-01-06T09:45:00'),
      },
      {
        id: 3,
        authorId: 6,
        userName: 'User6',
        userAvatar:
          'https://avatars.mds.yandex.net/i?id=44ee05a9dd86b08c3572f577c3fd8ec118fecd74-7761267-images-thumbs&n=13',
        content: '�� советую этот проект!',
        createdAt: new Date('2022-01-07T15:00:00'),
      },
    ],
    shares: 92,
  },
];
