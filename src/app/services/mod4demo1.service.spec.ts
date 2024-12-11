import { TestBed } from '@angular/core/testing';
import { Mod4demo1Service } from './mod4demo1.service';

describe('Mod4demo1Service', () => {
  let service: Mod4demo1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod4demo1Service);
  });

  afterEach(() => {
    // Nettoyage après chaque test pour éviter les interférences entre tests
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store and return the user after login', () => {
    const user = service.login();
    expect(user).toEqual({ name: 'Michel' });

    const storedUser = localStorage.getItem('user');
    expect(storedUser).toBeTruthy();
    expect(JSON.parse(storedUser!)).toEqual(user);
  });

  it('should retrieve the user from localStorage', () => {
    const mockUser = { name: 'Michel' };
    localStorage.setItem('user', JSON.stringify(mockUser));

    const retrievedUser = service.getUser();
    expect(retrievedUser).toEqual(mockUser);
  });

  it('should return null if no user is stored', () => {
    const retrievedUser = service.getUser();
    expect(retrievedUser).toBeNull();
  });

  it('should remove the user from localStorage on logout', () => {
    localStorage.setItem('user', JSON.stringify({ name: 'Michel' }));

    service.logout();

    const storedUser = localStorage.getItem('user');
    expect(storedUser).toBeNull();
  });
});
