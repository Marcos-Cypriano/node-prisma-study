import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.modules.create({
        data: {
            description: "Aprendendo a usar o Prisma IO",
            name: "Aprendendo Prisma",
            courses: {
                create: {
                    course: {
                        connect: {
                            id: "2212407f-0588-4de6-8bf6-ae6523b17a7c"
                        }
                    }
                }
            }
        }
    })
    console.log(result)
}

main()