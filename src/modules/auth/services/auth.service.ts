import GoogleAuthService from "./googleAuth.service";

export class AuthService {
  static async login() {
    return GoogleAuthService.signIn();
  }

  static async logout() {
    return GoogleAuthService.signOut();
  }
}
