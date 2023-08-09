import { AuthService, UserService } from "@utils/service";
import { StateService } from "../state/state.service";
import { IAppState } from "@app-state";

export function verifyToken(
    authService: AuthService,
    stateService: StateService<IAppState>,
    userService: UserService
) {
    return () => {
        if (authService.isAuthenticated()) {
            userService.getItem$().subscribe({
                next: (res: any) => {
                    const appState = stateService.currentState;
                    appState.me = res;
                    stateService.commit(appState);
                }
            })
        }
    }
}