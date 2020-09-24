import axios from "axios";

export default {
  employeeInfo: function () {
    return axios.get(
      "https://randomuser.me/api/?results=50&inc=name,email,dob,phone,picture&nat=us"
    );
  },
};
