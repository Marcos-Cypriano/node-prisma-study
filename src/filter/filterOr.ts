import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.findMany({
        where: {
            OR: [
                {
                    name: {
                        contains: "NodeJS"
                    }
                },
                {
                    name: {
                        contains: "Elixir"
                    }
                }
            ],
            AND: {
                duration: 250
            }
        }
    })
    console.log(result)
}

main()