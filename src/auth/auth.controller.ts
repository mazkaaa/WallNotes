import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { SignInDto } from './dto/sign-in.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Auth")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}


  @Post('login')
  @ApiOperation({
    description: "Login",
  })
  @UseInterceptors(TransformInterceptor)
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password)
  }
}
