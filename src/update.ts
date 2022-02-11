import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.update({
        where: {
            id: "c78e0f40-db99-4c6f-9a2d-fe96bef43fdc"
        },
        data: {
            duration: 60,
            description: "Curso de uma linguagem muito antiga."
        }
    })

    console.log(result)
}

main()