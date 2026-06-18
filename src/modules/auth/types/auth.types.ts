export interface UserModel {
  uid: string;

  email: string;

  displayName: string;

  photoURL: string;
}

export interface AuthState {
  user: UserModel | null;

  isAuthenticated: boolean;

  isLoading: boolean;

  login: (user: UserModel) => void;

  logout: () => void;

  setLoading: (loading: boolean) => void;
}
