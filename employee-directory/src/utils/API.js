import axios from "axios";

export default {
  employeeInfo: function () {
    return axios.get(
      "https://randomuser.me/api/?results=20&inc=id,name,email,dob,phone,picture&nat=us"
    );
  },
};

// make a backup with a json file in case this does not work
