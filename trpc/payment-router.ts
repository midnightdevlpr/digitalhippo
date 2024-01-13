import { z } from "zod";
import { privateProcedure, router } from "./trpc";

export const paymentRouter = router({
    createSession: privateProcedure.input(z.object({productsIds: z.array(z.string())})).mutation(({
        ctx, input
    }) => {
        const {} = ctx
    })
})