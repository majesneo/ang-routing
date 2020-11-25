import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class AuthService {
    private isAuth: boolean = false;

    login() {
        this.isAuth = true;
    }

    logout() {
        this.isAuth = false;
    }

    isAuthorized(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.isAuth);
            }, 1000);
        });
    }
}
