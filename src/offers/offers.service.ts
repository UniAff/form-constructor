import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Offer } from '@prisma/client';
import { CreateOfferDto, UpdateOfferDto } from './dto/offer.dto';

@Injectable()
export class OfferService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Offer[]> {
    return this.prisma.offer.findMany({
      include: { geo: true, Form: true },
    });
  }

  async findOne(id: number): Promise<Offer | null> {
    return this.prisma.offer.findUnique({
      where: { id },
      include: { geo: true, Form: true },
    });
  }

  async create(data: CreateOfferDto): Promise<Offer> {
    return this.prisma.offer.create({
      data,
    });
  }

  async update(id: number, data: UpdateOfferDto): Promise<Offer> {
    return this.prisma.offer.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Offer> {
    return this.prisma.offer.delete({
      where: { id },
    });
  }

  async findOffersByGeo(geoId: number): Promise<Offer[]> {
    return this.prisma.offer.findMany({ where: { geoId } });
  }
}
