import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Form, Prisma } from '@prisma/client';
import { CreateFormDto, UpdateFormDto } from './dto/form.dto';

@Injectable()
export class FormService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Form[]> {
    return this.prisma.form.findMany({
      include: { offer: true, geo: true },
    });
  }

  async findOne(id: number): Promise<Form | null> {
    return this.prisma.form.findUnique({
      where: { id },
      include: { offer: true, geo: true },
    });
  }

  async create(data: CreateFormDto): Promise<Form> {
    return this.prisma.form.create({
      data: {
        name: data.name,
        photo: data.photo,
        currency: data.currency,
        price: data.price,
        discount: data.discount,
        template: data.template,
        offer: {
          connect: { id: data.offerId },
        },
        geo: {
          connect: { id: data.geoId },
        },
      },
    });
  }

  async update(id: number, data: UpdateFormDto): Promise<Form> {
    const updateData: Prisma.FormUpdateInput = {
      name: data.name,
      photo: data.photo,
      currency: data.currency,
      price: data.price,
      discount: data.discount,
      template: data.template,
    };

    if (data.offerId) {
      updateData.offer = { connect: { id: data.offerId } };
    }

    if (data.geoId) {
      updateData.geo = { connect: { id: data.geoId } };
    }

    return this.prisma.form.update({
      where: { id },
      data: updateData,
    });
  }

  async delete(id: number): Promise<Form> {
    return this.prisma.form.delete({
      where: { id },
    });
  }
}
