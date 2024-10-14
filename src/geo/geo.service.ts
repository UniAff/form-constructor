import { Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma/prisma.service';
import { Geo } from '@prisma/client';

@Injectable()
export class GeoService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Geo[]> {
    return this.prisma.geo.findMany();
  }

  async findOne(id: number): Promise<Geo> {
    return this.prisma.geo.findUnique({ where: { id } });
  }

  async create(data: {
    code: string;
    name: string;
    currency: string;
    language: string;
  }): Promise<Geo> {
    const { code, name, currency, language } = data;

    return this.prisma.geo.create({
      data: {
        code,
        name,
        currency,
        language,
      },
    });
  }

  async update(id: number, data: Partial<Geo>): Promise<Geo> {
    return this.prisma.geo.update({ where: { id }, data });
  }

  async delete(id: number): Promise<Geo> {
    return this.prisma.geo.delete({ where: { id } });
  }
}
