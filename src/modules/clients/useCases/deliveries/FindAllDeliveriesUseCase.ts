import { prisma } from "../../../../database/PrismaClient";

export class FindAllDeliveriesUseCase{
    async execute(id_client: string){
        const deliveries = await prisma.clients.findMany({
            where: {
                id: id_client
            },
            select:{
                deliveries: true,
                id: true,
                username: true,
            }

        })

        return deliveries;

    }
}