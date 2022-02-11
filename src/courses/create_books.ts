import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 250,
            name: "Curso de Flask",
            description: "Curso excelente de back-end usando Elixir",
            teacher : {
                create: {
                    name: "BrunA Rocha (CodeShow)"
                }
            },
            books: {
                createMany: {
                    data: [
                        {name: "Curso Flask"},
                        {name: "The Zen of Python"}
                    ]
                }
            }
        }
    })
    console.log(result)
}

main()