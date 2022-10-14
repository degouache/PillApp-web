export interface UserRequest {
    username: string;
    password: string;
}

export interface UserResponse {
    token: string;
    user: UserObjet; 
}

export interface UserObjet {
      email: string;
      userName: string; 
}


