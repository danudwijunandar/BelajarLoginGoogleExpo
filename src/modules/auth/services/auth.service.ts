import GoogleAuthService from "./googleAuth.service";

export class AuthService {
  static async login() {
    return await GoogleAuthService.signIn();
  }

  static async logout() {
    return await GoogleAuthService.signOut();
  }
}
