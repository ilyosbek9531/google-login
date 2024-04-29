import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleLoginModule } from './google-login/google-login.module';

@Module({
  imports: [GoogleLoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
