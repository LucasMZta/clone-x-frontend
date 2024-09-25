import { Tweet } from "@/types/tweet";
import { user, user2 } from "./user";

export const tweet1: Tweet = {
   id: 123,
   user: user,
   body: 'Outro dia magnífico para a tecnologia!',
   image: 'https://www.mooc.org/hs-fs/hubfs/learn-programming-career-jpg.jpeg?width=500&name=learn-programming-career-jpg.jpeg',
   likeCount: 254,
   commentCount: 95,
   retweetCount: 1,
   liked: true,
   retweeted: false,
   dataPost: new Date(2024, 9, 25, 11, 0)
}

export const tweet2: Tweet = {
   id: 130,
   user: user2,
   body: 'Este é apenas para contar a novidade para vocês.',
   likeCount: 11254,
   commentCount: 1658,
   retweetCount: 365,
   liked: false,
   retweeted: true,
   dataPost: new Date(2024, 9, 14, 17, 50)
}

export const tweet3: Tweet = {
   id: 132,
   user: user2,
   body: 'Kaspersky deixa os EUA e instala outro antivírus no lugar sem avisar. Plataforma foi banida pelo governo, mas fez migração automática de usuários para o UltraAV..',
   likeCount: 11254,
   commentCount: 1658,
   retweetCount: 365,
   liked: false,
   retweeted: true,
   dataPost: new Date(2024, 9, 14, 17, 50)
}
