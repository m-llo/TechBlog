module.exports = {
    format_time: (date) => {
      return date.toLocaleTimeString();
    },
    format_date: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
      }`;
    },
    current_user: () => {
      return req.session.userid
    },
    loggedIn: () =>{
      if (req.session.loggedIn){

        return true
      }
    }
  };