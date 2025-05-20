import {
    Controller,
    Get,
    Post,
    Patch,
    Param,
    Body,
    ParseIntPipe,
} from '@nestjs/common';
import { QuartoService } from './quarto.service';
import { Quarto } from './quarto.entity';

@Controller('quarto')
export class QuartoController {
    constructor(private readonly quartoService: QuartoService) { }

    // GET /quarto
    @Get()
    findAll(): Promise<Quarto[]> {
        return this.quartoService.findAll();
    }

    // POST /quarto
    @Post()
    create(@Body() data: Partial<Quarto>): Promise<Quarto> {
        return this.quartoService.create(data);
    }

    // GET /quarto/:id
    @Get(':id')
    show(@Param('id', ParseIntPipe) id: number): Promise<Quarto> {
        return this.quartoService.show(id);
    }

    // PATCH /quarto/:id
    @Patch(':id')
    patch(
        @Param('id', ParseIntPipe) id: number,
        @Body() status: Partial<Quarto>,
    ): Promise<Quarto> {
        return this.quartoService.patch(id, status);
    }
}
