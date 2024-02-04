import { gql } from "@apollo/client";

export const GET_ALL_CARS = gql`
  query Cars {
    cars {
      seats_number
      license_plate
      description
      manufacturer_model
      color
      year
      location
      image
      image_alt
      hour_price
      availability
    }
  }
`;

export const GET_CAR = gql`
  query GetCar($id: String) {
    car(id: $id) {
      seats_number
      license_plate
      description
      manufacturer_model
      color
      year
      location
      image
      image_alt
      hour_price
      availability
    }
  }
`;

export const GET_All_USERS = gql`
  query GetAllUsers {
    users {
      first_name
      last_name
      email
      password
      phone_number
      roles
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String) {
    userById(id: $id) {
      first_name
      last_name
      email
      password
      phone_number
      roles
    }
  }
`;

export const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($email: String) {
    userByEmail(email: $email) {
      first_name
      last_name
      email
      password
      phone_number
      roles
    }
  }
`;
