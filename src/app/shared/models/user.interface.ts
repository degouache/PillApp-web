export interface UserRequest {
    username: string;
    password: string;
}

export interface UserResponse {
    token: string;
    profile: profileObject; 
}

export interface profileObject {
      userName: string; 
}


