import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { TransformInterceptor } from "src/interceptors/transform.interceptor";
import { SignInDto } from "./dto/sign-in.dto";
import { LoggingInterceptor } from "src/interceptors/logging.interceptor";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { SignUpDto } from "./dto/sign-up.dto";
import { GoogleOauthGuard } from "./guards/google-oauth.guard";
import { Response } from "express";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get("google")
  @UseGuards(GoogleOauthGuard)
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  auth() {}

  @Get("google/redirect")
  @UseGuards(GoogleOauthGuard)
  @UseInterceptors(TransformInterceptor)
  async googleAuthCallback(@Req() req, @Res() res: Response) {
    const userData: {
      email: string;
      firstName: string;
      lastName: string;
      picture: string;
      accessToken: string;
    } = req.user;
    const token = await this.authService.signIn(userData);

    res.cookie("access_token", token, {
      maxAge: 2592000000,
      sameSite: true,
      secure: false,
    });

    return res.json({
      email: userData.email,
      access_token: token.access_token,
    });
  }
}
