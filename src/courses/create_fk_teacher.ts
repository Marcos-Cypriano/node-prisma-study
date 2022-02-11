import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 250,
            name: "Curso de Elixir",
            description: "Curso excelente de back-end usando Elixir",
            fk_id_teacher: "7aee487c-eeba-498f-9570-f03dd9620017"
        }
    })
    console.log(result)
}

main()