import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            course: {
                create: {
                    duration: 350,
                    name: "Curso de React",
                    description: "Curso front-end com React",
                    teacher: {
                        create: {
                            name: "Diego Fernandes"
                        }
                    }
                }
            },
            module: {
                create: {
                    name: "Design no React",
                    description: "Aprendendo design no framework React."
                }
            }
        }
    })
    console.log(result)
}

main()