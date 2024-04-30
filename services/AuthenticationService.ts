import { Request, Response } from "express";

export function createUser(req: Request, res: Response): void {
  res.send({
    message: "create user",
  });
}

export function deleteUser(req: Request, res: Response): void {
  (req, res) => {
    res.send({
      message: "delete user",
    });
  };
}
export function updateUser(req: Request, res: Response): void {
  (req, res) => {
    res.send({
      message: "update user",
    });
  };
}
export function getUser(req: Request, res: Response): void {
  (req, res) => {
    res.send({
      message: "get user",
    });
  };
}
export function login(req: Request, res: Response): void {
  (req, res) => {
    res.send({
      message: "login",
    });
  };
}
export function logout(req: Request, res: Response): void {
  (req, res) => {
    res.send({
      message: "logout",
    });
  };
}
