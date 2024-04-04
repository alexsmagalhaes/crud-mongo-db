import { FastifyReply, FastifyRequest } from "fastify"
import { ListCustomersService } from "../services/ListCustomersService"

class ListCustomersController{
   async handlle(resquest: FastifyRequest, reply: FastifyReply){

      const listCustomService = new ListCustomersService()
   
      const customers = await listCustomService.excute()

      reply.send(customers)
   }
}

export {ListCustomersController}