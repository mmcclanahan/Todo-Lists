import { Request, Response } from "express";
//type annotation below dont necessarily need to but its good practice
import { CreateUserDto } from "../dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../types/query-params";

export function createUser(
  req: Request<
    {
      id: string;
    },
    {},
    CreateUserDto,
    CreateUserQueryParams
  >,
  res: Response
) {
  res.status(201).send();
}
