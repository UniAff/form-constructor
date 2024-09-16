import { IsInt, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateFormDto {
  @ApiPropertyOptional({ description: 'Offer ID related to the form' })
  @IsInt()
  offerId: number;

  @ApiProperty({ description: 'Name of the form' })
  @IsString()
  name: string;

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

  @ApiProperty({ description: 'Template used for the form' })
  template: string;

  @ApiProperty({ description: 'Creation timestamp of the form' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp of the form' })
  updatedAt: Date;
}
