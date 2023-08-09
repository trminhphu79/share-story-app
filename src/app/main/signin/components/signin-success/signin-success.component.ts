import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from '@utils/service';

@Component({
  selector: 'tmp-signin-success',
  standalone: true,
  imports: [CommonModule],
  template: "",
  styleUrls: ['./signin-success.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SigninSuccessComponent {
  private _route: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  private _localStorage = inject(LocalStorageService)
  constructor() {
  }

  ngOnInit() {
    this._route.queryParamMap.subscribe(queryParams => {
      this._localStorage.setItem("accessToken", queryParams.get('accessToken'));
      this._localStorage.setItem("refreshToken", queryParams.get('refreshToken'));
      this._router.navigate(['shell'])
    });
  }
}
