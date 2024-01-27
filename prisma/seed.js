const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');
const saltRounds = 10;

function generateDummyPost() {
  const username = faker.internet.userName();
  const plainPassword = faker.internet.password();
  const salt = bcrypt.genSaltSync(saltRounds);
  const password = bcrypt.hashSync(plainPassword, salt);
  const displayName = faker.person.fullName()
  const avatar = faker.image.avatar();
  const location = faker.location.city() + ', ' + faker.location.country();
  const title = faker.lorem.sentence();
  const content = faker.lorem.paragraph();
  const categories = Array.from({ length: 3 }, () => faker.lorem.word());
  const thumbnail = 'https://i.imgur.com/qNk5dQy.jpg';

  // const saltRound = 10;

  // const password = await bcrypt.hash(plainPassword, saltRound);
  
  return {
    username,
    password,
    displayName,
    avatar,
    location,
    post: {
      create: {
        title,
        content,
        thumbnail,
        categories
      }
    }
  };
}

async function main() {
    const Users = Array.from({ length: 5 }, generateDummyPost);
    console.log(Users);
    for (let user of Users) {
      await prisma.user.create({
        data: user
      });
    }
  
    const allUsers = await prisma.user.findMany({
      include: {
        post: true
      },
    })
    console.dir(allUsers, { depth: null })
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });