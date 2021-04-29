import UserService from "./userService";
import PaymentService from "./paymentService";
import TramService from "./tramService";

/**
 * Contains all services so you don't have to import them all everywhere
 */
export default class Services {
    userService = new UserService();
    paymentService = new PaymentService();
    tramService = new TramService();
}