import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.coursesModules.create({
        data: {
            fk_id_course: "",
            fk_id_module: ""
        }
    })
    console.log(result)
}

main()