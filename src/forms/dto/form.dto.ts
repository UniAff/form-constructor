import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFormDto {
  @ApiPropertyOptional({ description: 'Offer ID related to the form' })
  @IsInt()
  offerId: number;

  @ApiProperty({ description: 'Name of the form' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'Photo URL of the form' })
  @IsString()
  @IsOptional()
  photo?: string;

  @ApiProperty({ description: 'Geo ID for the form' })
  @IsInt()
  geoId: number;

  @ApiProperty({ description: 'Currency used in the form' })
  @IsString()
  currency: string;

  @ApiProperty({ description: 'Price of the form' })
  @IsInt()
  price: number;

  @ApiProperty({ description: 'Discount available on the form' })
  @IsInt()
  discount: number;

  @ApiProperty({ description: 'Template used for the form' })
  @IsString()
  template: string;
}

export class UpdateFormDto {
  @ApiPropertyOptional({ description: 'Offer ID related to the form' })
  @IsInt()
  @IsOptional()
  offerId?: number;

  @ApiPropertyOptional({ description: 'Name of the form' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'Photo URL of the form' })
  @IsString()
  @IsOptional()
  photo?: string;

  @ApiPropertyOptional({ description: 'Geo ID for the form' })
  @IsInt()
  @IsOptional()
  geoId?: number;

  @ApiPropertyOptional({ description: 'Currency used in the form' })
  @IsString()
  @IsOptional()
  currency?: string;

  @ApiPropertyOptional({ description: 'Price of the form' })
  @IsInt()
  @IsOptional()
  price?: number;

  @ApiPropertyOptional({ description: 'Discount available on the form' })
  @IsInt()
  @IsOptional()
  discount?: number;

  @ApiPropertyOptional({ description: 'Template used for the form' })
  @IsString()
  @IsOptional()
  template?: string;
}

export class FormEntity {
  @ApiProperty({ description: 'ID of the form' })
  id: number;

  @ApiProperty({ description: 'Name of the form' })
  name: string;

  @ApiProperty({ description: 'Photo URL of the form' })
  photo: string;

  @ApiProperty({ description: 'Geo ID associated with the form' })
  geoId: number;

  @ApiProperty({ description: 'Currency used in the form' })
  currency: string;

  @ApiProperty({ description: 'Price of the form' })
  price: number;

  @ApiProperty({ description: 'Discount available on the form' })
  discount: number;

  @ApiProperty({ description: 'Template used for the form' })
  template: string;

  @ApiProperty({ description: 'Creation timestamp of the form' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp of the form' })
  updatedAt: Date;
}
