export interface UserRequest {
  username: string;
  password: string;
}

export interface UserResponse {
  token: string;
  profile: ProfileObject;
}

export interface ProfileObject {
  userName: string;
}

export interface UserRegister {
  email: string;
  userName: string;
  password: string;
}
