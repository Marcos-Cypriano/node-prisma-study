import { PrismaClient, Prisma, Modules } from "@prisma/client"

const prisma = new PrismaClient()

let skip = 0
let exist = true

async function main() {

    const result = await prisma.$queryRaw<Modules[]>(Prisma.sql`SELECT * FROM modules`)

    result.map((item) => console.log(item.name))
    //console.log(result)

}

main()