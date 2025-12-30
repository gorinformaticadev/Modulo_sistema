export class CreateMeuModuloDto {
  name: string;
  description?: string;
}

export class UpdateMeuModuloDto {
  name?: string;
  description?: string;
}

export class FilterMeuModuloDto {
  limit?: number;
  offset?: number;
}
