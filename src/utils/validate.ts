import { data } from "autoprefixer";
import { User } from "../types/User";
type error ={
    [Key:string]:string
}
export const validate = (user: User) => {
    const errors: error = {};
    if (!user.name) {
        errors.name = "Nome é obrigatório";
      }
      if (!user.email) {
        errors.email = "Email é obrigatório";
      }
      if (!user.agree) {
        errors.agree = "Você deve concordar com os termos";
      }
   
    return errors;
};