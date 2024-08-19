import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OfferService } from './offers.service';
import { CreateOfferDto, UpdateOfferDto, OfferEntity } from './dto/offer.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('offers')
@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Offers' })
  @ApiResponse({
    status: 200,
    description: 'List of all Offers',
    type: [OfferEntity],
  })
  async findAll(): Promise<OfferEntity[]> {
    return this.offerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Offer by ID' })
  @ApiResponse({ status: 200, description: 'Offer found', type: OfferEntity })
  @ApiResponse({ status: 404, description: 'Offer not found' })
  async findOne(@Param('id') id: number): Promise<OfferEntity> {
    return this.offerService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new Offer' })
  @ApiResponse({ status: 201, description: 'Offer created', type: OfferEntity })
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createOfferDto: CreateOfferDto): Promise<OfferEntity> {
    return this.offerService.create(createOfferDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing Offer' })
  @ApiResponse({ status: 200, description: 'Offer updated', type: OfferEntity })
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id') id: number,
    @Body() updateOfferDto: UpdateOfferDto,
  ): Promise<OfferEntity> {
    return this.offerService.update(id, updateOfferDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an Offer' })
  @ApiResponse({ status: 200, description: 'Offer deleted' })
  async delete(@Param('id') id: number): Promise<OfferEntity> {
    return this.offerService.delete(id);
  }
}
