import { Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { PrismaService } from 'prisma/prisma.service'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	create(dto: CreateUserDto) {
		return this.prisma.user.create({
			data: dto,
		})
	}

	async findAll() {
		return await this.prisma.user.findMany()
	}

	async findOne(id: number) {
		return await this.prisma.user.findUnique({
			where: {
				id: id,
			},
		})
	}

	async update(id: number, updateUserDto: UpdateUserDto) {
		const user = this.findOne(id)

		return this.prisma.user.update({
			where: {
				id: (await user).id,
			},
			data: updateUserDto,
		})
	}

	async remove(id: number) {
		try {
			return await this.prisma.user.delete({
				where: {
					id: id,
				},
			})
		} catch (error) {
			return `Такого пользователя не существует!`
		}
	}
}
