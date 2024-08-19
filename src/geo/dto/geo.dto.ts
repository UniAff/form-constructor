import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGeoDto {
  @ApiProperty({ description: 'Code of the Geo entity' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ description: 'Name of the Geo entity' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Currency associated with the Geo entity' })
  @IsString()
  @IsNotEmpty()
  currency: string;

  @ApiProperty({ description: 'Language used in the Geo entity' })
  @IsString()
  @IsNotEmpty()
  language: string;
}

export class UpdateGeoDto {
  @ApiProperty({ description: 'Code of the Geo entity', required: false })
  @IsString()
  @IsNotEmpty()
  code?: string;

  @ApiProperty({ description: 'Name of the Geo entity', required: false })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    description: 'Currency associated with the Geo entity',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  currency?: string;

  @ApiProperty({
    description: 'Language used in the Geo entity',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  language?: string;
}

export class GeoEntity {
  @ApiProperty({ description: 'ID of the Geo entity' })
  id: number;

  @ApiProperty({ description: 'Code of the Geo entity' })
  code: string;

  @ApiProperty({ description: 'Name of the Geo entity' })
  name: string;

  @ApiProperty({ description: 'Currency associated with the Geo entity' })
  currency: string;

  @ApiProperty({ description: 'Language used in the Geo entity' })
  language: string;

  @ApiProperty({ description: 'Creation timestamp of the Geo entity' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp of the Geo entity' })
  updatedAt: Date;
}
