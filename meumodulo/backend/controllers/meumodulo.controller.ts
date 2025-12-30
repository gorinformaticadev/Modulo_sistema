import { Controller, Get, Post, Put, Delete, Param, Body, Query, UseGuards, Req } from '@nestjs/common';
import { MeuModuloService } from '../services/meumodulo.service';
import { JwtAuthGuard } from '@core/guards/jwt-auth.guard';
import { RolesGuard } from '@core/guards/roles.guard';
import { Roles } from '@core/decorators/roles.decorator';

@Controller('api/meumodulo')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MeuModuloController {
  constructor(private readonly meuModuloService: MeuModuloService) { }

  @Get()
  async findAll(@Query() filters: any, @Req() req) {
    const tenantId = req.user?.tenantId;
    return this.meuModuloService.findAll(tenantId, filters);
  }

  @Get('stats')
  async getStats(@Req() req) {
    const tenantId = req.user?.tenantId;
    return this.meuModuloService.getStats(tenantId);
  }
}
