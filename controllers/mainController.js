exports.getIndex = (req, res, next) => {
  res.render("index", {
    pageTitle: "Index",
    path: "/index",
  });
};

exports.getLanding = (req, res, next) => {
  res.render("landing", {
    pageTitle: "Landing",
    path: "/landing",
  });
};

exports.getMyProfile = (req, res, next) => {
  res.render("myprofile", {
    pageTitle: "My Profile",
    path: "/myprofile",
  });
};

exports.getTimesheets = (req, res, next) => {
  res.render("timesheets", {
    pageTitle: "Time Sheets",
    path: "/timesheets",
  });
};

exports.getAnnualLeave = (req, res, next) => {
  res.render("annualleave", {
    pageTitle: "Annual Leave",
    path: "/annualleave",
  });
};

exports.getCalendar = (req, res, next) => {
  res.render("calendar", {
    pageTitle: "Calender",
    path: "/calendar",
  });
};
