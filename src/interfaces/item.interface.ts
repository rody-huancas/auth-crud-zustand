export interface ItemResponse {
  _id:          string;
  name:         string;
  color:        string;
  gas:          string;
  year:         number;
  description?: string;
  price:        number;
  createdAt?:   string;
  updatedAt?:   string;
}
