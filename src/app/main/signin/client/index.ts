import { Injectable } from "@angular/core";
import { SessionService, UserService } from "@utils/service"
@Injectable()
export class UserClient extends UserService { }


@Injectable()
export class SessionClient extends SessionService { }