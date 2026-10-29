import { IsIn, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

const FIELD_OPTIONS = [
  '종합심리평가',
  '지능 평가',
  '주의력 평가',
  '지능·주의력 평가',
  '지능·기초학습 평가',
  '지능·주의력·기초학습 평가',
  '정서·성격 평가',
  '초기 면담',
  '개인상담(아동, 청소년, 성인, 직장인 등)',
  '가족·부부·커플상담',
  '기타',
];

const METHOD_OPTIONS = ['대면상담', '화상상담'];

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty({ message: '성함을 입력해 주세요.' })
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty({ message: '연락처를 입력해 주세요.' })
  @MaxLength(30)
  phone: string;

  @IsString()
  @IsIn(FIELD_OPTIONS, { message: '신청 항목 값이 올바르지 않습니다.' })
  field: string;

  @IsString()
  @IsIn(METHOD_OPTIONS, { message: '상담방식 값이 올바르지 않습니다.' })
  method: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  date?: string;

  @IsOptional()
  @IsString()
  @MaxLength(2000)
  message?: string;
}
