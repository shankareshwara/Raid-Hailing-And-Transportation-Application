import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8080/auth/";

class UserAuthService {
  saveUser(user) {
    return axios.post(AUTH_API_BASE_URL + "register", user);
  }
  
  loginUserWithEmailAndPassword(user) {
    return axios.post(AUTH_API_BASE_URL + "login", user);
  }
  
  saveDriver(driver){
    return axios.post(AUTH_API_BASE_URL + "registerDriver", driver);
  }
  
  getDriverByEmail(email){
    return axios.get(AUTH_API_BASE_URL + "getDriverByEmail/"+ email);

  }
  loginDriverWithEmailAndPassword(driver) {
    return axios.post(AUTH_API_BASE_URL + "loginDriver", driver);
  }

  getDriverByPlace(place){
    return axios.get(AUTH_API_BASE_URL + "place/"+ place);
    
  }
  getRide(){
    return axios.get(AUTH_API_BASE_URL + "getRide");

  }

  updateDriver(available){
    return axios.put(AUTH_API_BASE_URL + "updateDriver" , available);

  }

  addRide(ride){
    return axios.post(AUTH_API_BASE_URL + "postRide" , ride);

  }
  driverRide(ride){
    return axios.post(AUTH_API_BASE_URL + "driverRide" , ride);

  }

}

export default new UserAuthService();