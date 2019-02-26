import { async, fakeAsync, inject, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import testModuleMetadata from '../../test.config';
import AuthService from '../../services/AuthService';
import { Router } from '@angular/router';
import { LoginComponent } from './login.component';
import { Observable } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router;
  let authService;
  let observer;
  
  beforeEach(async(() => {
    router = {
      navigateByUrl: jasmine.createSpy('navigateByUrl')
    };

    authService = {
      login(){},
      register(){},
    };
    observer = Observable.create(function(observer) {
      observer.next('token');
    });
    spyOn(authService, 'login').and.returnValue(observer);
    spyOn(authService, 'register').and.returnValue(observer);

    TestBed.configureTestingModule({ 
      ...testModuleMetadata,
      providers: [
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ], 
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init userForm', () => {
    expect(component.userForm).toBeTruthy();
  });

  it('userForm should contains fields', () => {
    expect(component.userForm.controls['name']).toBeDefined();
    expect(component.userForm.controls['email']).toBeDefined();
    expect(component.userForm.controls['password']).toBeDefined();
  });

  it('should validate', () => {
    expect(component.userForm.valid).toBeFalsy();
    
    component.userForm.setValue({
      name: 'name',
      email: 'email@email.email',
      password: 'password',
    });
    expect(component.userForm.valid).toBeTruthy();
    
    component.userForm.patchValue({
      password: 'pas',
    });
    expect(component.userForm.valid).toBeFalsy();

    component.userForm.patchValue({
      email: 'email',
    });
    expect(component.userForm.valid).toBeFalsy();
  });

  it('shouldnt sent request if not valid', () => {
    component.userForm.setValue({
      name: '',
      email: '',
      password: '',
    });

    component.onLoginClick();
    expect(authService.login).not.toHaveBeenCalled();
    component.onRegisterClick();    
    expect(authService.register).not.toHaveBeenCalled();
  });

  it('should redirect after succesful login or registration', () => {
    component.userForm.setValue({
      name: 'name',
      email: 'email@email.email',
      password: 'password',
    });
    component.onLoginClick();
    component.onRegisterClick()
    expect(router.navigateByUrl).toHaveBeenCalledWith('/news');
    expect(router.navigateByUrl).toHaveBeenCalledTimes(2);
  });
});

