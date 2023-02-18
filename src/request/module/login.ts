import Request from "../index";

const userLogin = (name: string, pwd: string) => {
  return Request.post({
    url: "/login",
    data: {
      username: name,
      password: pwd,
    },
  });
};

const userSign = (email: string, pwd: string) => {
  return Request.post({
    url: "/register/send",
    data: {
      email,
      password: pwd,
    },
  });
};

export {
    userLogin,
    userSign
};
