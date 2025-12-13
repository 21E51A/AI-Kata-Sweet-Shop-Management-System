import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(email: string, password: string) {
    const user = await this.prisma.user.create({
      data: {
        email,
        password,
        role: 'USER',
      },
    });

    const { password: _, ...safeUser } = user;
    return safeUser;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }
}
