import axios from "axios";

const AUTH_API_BASE_URL = "http://localhost:8082/api/v1/feed/";

class FeedService {
  saveFeed(user) {
    return axios.post(AUTH_API_BASE_URL + "addFeedback", user);
  }
}
export default new FeedService();