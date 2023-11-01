import {environment} from "../../environments/environment";

const {API} = environment;

const urls = {
  search: `${API}/search/repositories?q=`
}

export {
  urls,
}
