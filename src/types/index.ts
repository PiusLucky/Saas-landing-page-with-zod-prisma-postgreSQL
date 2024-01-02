export interface ICreateUserResponse {
  response: {
    meta: Meta;
    data: CreateUserResponseData;
  };
}

export interface ILoginUserResponse {
  response: {
    meta: Meta;
    data: LoginUserResponseData;
  };
}

export interface IUserProfileResponse {
  response: {
    meta: Meta;
    data: IUserProfileResponseData;
  };
}

export interface IUsersListingResponse {
  response: {
    meta: Meta;
    data: IUserProfileResponseData[];
  };
}

export interface IUsersMetricResponse {
  response: {
    meta: Meta;
    data: {
      totalUsers: number;
      totalVerifiedUsers: number;
      totalChannels: number;
    };
  };
}

interface IUserProfileResponseData {
  id: number;
  email: string;
  full_name: string;
  is_verified: boolean;
  randomize_channel: number;
  created_at: Date;
  updated_at: Date;
}

interface LoginUserResponseData {
  userId: string;
  token: string;
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
