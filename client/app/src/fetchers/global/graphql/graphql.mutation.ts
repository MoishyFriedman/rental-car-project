import { gql } from "@apollo/client";

export const ADD_NEW_CAR = gql`
  mutation CreateCar($createCarInput: CreateCarInput!) {
    createCar(createCarInput: $createCarInput) {
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
    }
  }
`;
