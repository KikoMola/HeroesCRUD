import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        button {
            width: 300px;
            height: 90px;
            font-size: 1.875rem;
        }
        `
    ]
})
export class LoginComponent {

    constructor(private router: Router,
        private authService: AuthService) { }

    login() {
        this.authService.login()
            .subscribe(resp => {
                console.log(resp)
                if (resp.id) {
                    this.router.navigate(['./heroes'])
                }
            })

    }
}
