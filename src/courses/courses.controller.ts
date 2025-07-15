import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('courses')
export class CoursesController {
    @Get()
    findAll(@Res() response) {
        return  response.status(200).json({message: 'Listagem de cursos' });
    }

    @Get(':id/:name')
    findOne(@Param('id') id: string) {
        return  `Curso com ID ${id}`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `Update course with ID ${id}`;
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param('id') id: string) {
            return `Delete course with ID ${id}`;
    }
}