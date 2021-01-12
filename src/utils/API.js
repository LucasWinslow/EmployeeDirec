import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
const APIKEY = "1MZJ-D0D4-N72X-GKWL";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};



$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });