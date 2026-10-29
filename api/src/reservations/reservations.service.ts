import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service';
import { CreateReservationDto } from './dto/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async create(dto: CreateReservationDto) {
    const { data, error } = await this.supabaseService
      .getClient()
      .from('reservations')
      .insert({
        name: dto.name,
        phone: dto.phone,
        field: dto.field,
        method: dto.method,
        preferred_date: dto.date ?? null,
        message: dto.message ?? null,
      })
      .select()
      .single();

    if (error) {
      throw new InternalServerErrorException(
        `예약 문의 저장 중 오류가 발생했습니다: ${error.message}`,
      );
    }

    return data;
  }
}
