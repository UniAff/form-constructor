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
  ParseIntPipe,
} from '@nestjs/common';
import { GeoService } from './geo.service';
import { CreateGeoDto, UpdateGeoDto, GeoEntity } from './dto/geo.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('geo')
@Controller('geo')
export class GeoController {
  constructor(private readonly geoService: GeoService) {}

  @Get()
  @ApiOperation({ summary: 'Get all Geo entities' })
  @ApiResponse({
    status: 200,
    description: 'List of all Geo entities',
    type: [GeoEntity],
  })
  async findAll(): Promise<GeoEntity[]> {
    return this.geoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Geo entity by ID' })
  @ApiResponse({
    status: 200,
    description: 'Geo entity found',
    type: GeoEntity,
  })
  @ApiResponse({ status: 404, description: 'Geo entity not found' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<GeoEntity> {
    return this.geoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new Geo entity' })
  @ApiResponse({
    status: 201,
    description: 'Geo entity created',
    type: GeoEntity,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createGeoDto: CreateGeoDto): Promise<GeoEntity> {
    return this.geoService.create(createGeoDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a Geo entity' })
  @ApiResponse({
    status: 200,
    description: 'Geo entity updated',
    type: GeoEntity,
  })
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateGeoDto: UpdateGeoDto,
  ): Promise<GeoEntity> {
    return this.geoService.update(id, updateGeoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a Geo entity' })
  @ApiResponse({ status: 200, description: 'Geo entity deleted' })
  async delete(@Param('id', ParseIntPipe) id: number): Promise<GeoEntity> {
    return this.geoService.delete(id);
  }
}
