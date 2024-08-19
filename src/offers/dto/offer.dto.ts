import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOfferDto {
  @ApiProperty({ description: 'Name of the Offer' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Geo ID associated with the Offer' })
  @IsInt()
  @IsNotEmpty()
  geoId: number;

  @ApiProperty({ description: 'Price of the Offer' })
  @IsString()
  @IsNotEmpty()
  price: string;

  @ApiProperty({ description: 'Discount available on the Offer' })
  @IsString()
  @IsNotEmpty()
  discount: string;

  @ApiProperty({ description: 'URL of the preview image for the Offer' })
  @IsString()
  @IsNotEmpty()
  previewImageUrl: string;

  @ApiProperty({ description: 'Link to the Offer' })
  @IsString()
  @IsNotEmpty()
  link: string;
}

export class UpdateOfferDto {
  @ApiProperty({ description: 'Name of the Offer', required: false })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'Geo ID associated with the Offer',
    required: false,
  })
  @IsInt()
  @IsOptional()
  geoId?: number;

  @ApiProperty({ description: 'Price of the Offer', required: false })
  @IsString()
  @IsOptional()
  price?: string;

  @ApiProperty({
    description: 'Discount available on the Offer',
    required: false,
  })
  @IsString()
  @IsOptional()
  discount?: string;

  @ApiProperty({
    description: 'URL of the preview image for the Offer',
    required: false,
  })
  @IsString()
  @IsOptional()
  previewImageUrl?: string;

  @ApiProperty({ description: 'Link to the Offer', required: false })
  @IsString()
  @IsOptional()
  link?: string;
}

export class OfferEntity {
  @ApiProperty({ description: 'ID of the Offer' })
  id: number;

  @ApiProperty({ description: 'Name of the Offer' })
  name: string;

  @ApiProperty({ description: 'Geo ID associated with the Offer' })
  geoId: number;

  @ApiProperty({ description: 'Price of the Offer' })
  price: string;

  @ApiProperty({ description: 'Discount available on the Offer' })
  discount: string;

  @ApiProperty({ description: 'URL of the preview image for the Offer' })
  previewImageUrl: string;

  @ApiProperty({ description: 'Link to the Offer' })
  link: string;

  @ApiProperty({ description: 'Creation timestamp of the Offer' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp of the Offer' })
  updatedAt: Date;
}
