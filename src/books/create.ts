import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    const result = await prisma.books.create({
        data: {
            name: "NodeJS testing with Jest",
            course_id: "2212407f-0588-4de6-8bf6-ae6523b17a7c"
        }
    })
    console.log(result)
}

main()