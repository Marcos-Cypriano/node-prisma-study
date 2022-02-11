import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            id: "2212407f-0588-4de6-8bf6-ae6523b17a7c"
        },
        include: {
            modules: true,
            books: true
        }
    })
    console.log(JSON.stringify(result))
}

main()