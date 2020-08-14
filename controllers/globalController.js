export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const login = (req, res) => res.render("login", { pageTitle: "Login" });
export const join = (req, res) => res.render("join", { pageTitle: "Join" });
