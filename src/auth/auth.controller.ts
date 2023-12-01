import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { SignInDto } from './dto/sign-in.dto';
import { LoggingInterceptor } from 'src/interceptors/logging.interceptor';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SignUpDto } from './dto/sign-up.dto';

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Login for getting the token that will be used for the other endpoints
   * @param signInDto
   * @returns
   */
  @Post("login")
  @ApiOperation({
    summary: "Login user",
  })
  @UseInterceptors(TransformInterceptor)
  signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  /**
   * Signup to create the account for the wallnotes
   * @param signUpDto 
   * @returns 
   */
  @Post("signup")
  @UseInterceptors(TransformInterceptor)
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto)
  }
}
