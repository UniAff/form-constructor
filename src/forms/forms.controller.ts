import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FormService } from './forms.service';
import { CreateFormDto, UpdateFormDto, FormEntity } from './dto/form.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('forms')
@Controller('forms')
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  @ApiOperation({ summary: 'Get all forms' })
  @ApiResponse({
    status: 200,
    description: 'List of all forms',
    type: [FormEntity],
  })
  async findAll(): Promise<FormEntity[]> {
    return this.formService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get form by ID' })
  @ApiResponse({ status: 200, description: 'Form found', type: FormEntity })
  @ApiResponse({ status: 404, description: 'Form not found' })
  async findOne(@Param('id') id: string): Promise<FormEntity | null> {
    return this.formService.findOne(Number(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a new form' })
  @ApiResponse({ status: 201, description: 'Form created', type: FormEntity })
  async create(@Body() createFormDto: CreateFormDto): Promise<FormEntity> {
    return this.formService.create(createFormDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a form' })
  @ApiResponse({ status: 200, description: 'Form updated', type: FormEntity })
  async update(
    @Param('id') id: string,
    @Body() updateFormDto: UpdateFormDto,
  ): Promise<FormEntity> {
    return this.formService.update(Number(id), updateFormDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a form' })
  @ApiResponse({ status: 200, description: 'Form deleted' })
  async delete(@Param('id') id: string): Promise<FormEntity> {
    return this.formService.delete(Number(id));
  }
}
