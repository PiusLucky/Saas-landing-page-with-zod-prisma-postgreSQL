export interface ICreateUserResponse {
  response: {
    meta: Meta;
    data: CreateUserResponseData;
  };
}

interface CreateUserResponseData {
  id: number;
  email: string;
  full_name: string;
  is_verified: boolean;
  password: string;
  randomize_channel: number;
  created_at: Date;
  updated_at: Date;
}

interface Meta {
  success: boolean;
  message: string;
}
