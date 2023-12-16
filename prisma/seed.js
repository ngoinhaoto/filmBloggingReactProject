const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const Users = [
  {
    username: "user1",
    password: "passw0rd@123",
    displayName: "John Doe",
    avatar: "https://example.com/avatar1.jpg",
    location: "New York, USA",
    post: {
      create: {
        title: "Amazing Adventure",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnail: "https://example.com/thumbnail1.jpg"
      }
    }
  },
  {
    username: "user2",
    password: "secureP@ss!23",
    displayName: "Alice Johnson",
    avatar: "https://example.com/avatar2.jpg",
    location: "London, UK",
    post: {
      create: {
        title: "Tech Trends",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        thumbnail: "https://example.com/thumbnail2.jpg"
      }
    }
  },
  {
    username: "user3",
    password: "Pa$$w0rd!",
    displayName: "Elena Rodriguez",
    avatar: "https://example.com/avatar3.jpg",
    location: "Barcelona, Spain",
    post: {
      create: {
        title: "Delicious Recipes",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        thumbnail: "https://example.com/thumbnail3.jpg"
      }
    }
  },
  {
    username: "user4",
    password: "p@ssw0rd123",
    displayName: "Chris Smith",
    avatar: "https://example.com/avatar4.jpg",
    location: "Sydney, Australia",
    post: {
      create: {
        title: "Fitness Tips",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        thumbnail: "https://example.com/thumbnail4.jpg"
      }
    }
  },
  {
    username: "user5",
    password: "secur3P@ss",
    displayName: "Mia Thompson",
    avatar: "https://example.com/avatar5.jpg",
    location: "Toronto, Canada",
    post: {
      create: {
        title: "Travel Diaries",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        thumbnail: "https://example.com/thumbnail5.jpg"
      }
    }
  },
  {
    username: "user6",
    password: "Pass123!",
    displayName: "Alex Brown",
    avatar: "https://example.com/avatar6.jpg",
    location: "Berlin, Germany",
    post: {
      create: {
        title: "Gaming Moments",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        thumbnail: "https://example.com/thumbnail6.jpg"
      }
    }
  },
  {
    username: "user7",
    password: "p@ssword987",
    displayName: "Sophie Wilson",
    avatar: "https://example.com/avatar7.jpg",
    location: "Paris, France",
    post: {
      create: {
        title: "Artistic Creations",
        content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        thumbnail: "https://example.com/thumbnail7.jpg"
      }
    }
  },
  {
    username: "user8",
    password: "strongP@ss",
    displayName: "Daniel Lee",
    avatar: "https://example.com/avatar8.jpg",
    location: "Tokyo, Japan",
    post: {
      create: {
        title: "Technology Insights",
        content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
        thumbnail: "https://example.com/thumbnail8.jpg"
      }
    }
  },
  {
    username: "user9",
    password: "P@ssw0rd456",
    displayName: "Emily Chen",
    avatar: "https://example.com/avatar9.jpg",
    location: "Shanghai, China",
    post: {
      create: {
        title: "Nature Wonders",
        content: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        thumbnail: "https://example.com/thumbnail9.jpg"
      }
    }
  },
  {
    username: "user10",
    password: "p@ssw0rd789",
    displayName: "Liam Kim",
    avatar: "https://example.com/avatar10.jpg",
    location: "Seoul, South Korea",
    post: {
      create: {
        title: "Movie Reviews",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        thumbnail: "https://example.com/thumbnail10.jpg"
      }
    }
  }      
]

async function main() {
    for (let user of Users) {
        await prisma.user.create({
            data: user
        })
    }
  
    const allUsers = await prisma.user.findMany({
      include: {
        post: true
      },
    })
    console.dir(allUsers, { depth: null })
}

main().catch(e => {
  console.log(e);
  process.exit(1)
}).finally(() => prisma.$disconnect())