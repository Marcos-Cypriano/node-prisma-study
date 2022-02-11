import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 300,
            name: "Curso de Python & Flask",
            description: "Curso excelente de Back-end em Python",
            teacher: {
                // Para criar apenas usar o método create ao invés de connect
                connect: {
                    id: "26c1705f-3043-4938-9331-73048e6a78ec"
                },
            }
        }
    })
    console.log(result)
}

main()