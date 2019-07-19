import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import LocalAPI from "./apis/Local";

import LandingPage from "./components/pages/landing/LandingPage";
import AuthLogin from "./components/pages/auth/AuthLogin";
import AuthRegister from "./components/pages/auth/AuthRegister";
import AuthEducatorApplication from "./components/pages/auth/AuthEducatorApplication";
import AdminDashboard from "./components/pages/admin/AdminDashboard";
import AdminTeachers from "./components/pages/admin/AdminTeachers";
import AdminUsers from "./components/pages/admin/AdminUsers";
import UsersDashboard from "./components/pages/user/UsersDashboard";
import UsersEdit from "./components/pages/user/UsersEdit";
import CoursesIndex from "./components/pages/course/CoursesIndex";
import CoursesShow from "./components/pages/course/CoursesShow";
import CoursesNew from "./components/pages/course/CoursesNew";
import CoursesDashboard from "./components/pages/course/CoursesDashboard";
import CoursesEdit from "./components/pages/course/CoursesEdit";
import EducatorsProfile from "./components/pages/educator/EducatorsProfile";
import EducatorsDashboard from "./components/pages/educator/EducatorsDashboard";
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import PrivateRoute from "./components/PrivateRoute";

// Stripe elements
import Checkout from "./components/pages/checkout/Checkout";

class App extends Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token") || null;
    this.state = { token };
    if (token) {
      LocalAPI.setAuthHeader(token);
    }
  }

  render() {
    return (
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          {/* <div>
              <Link to="/">LandingPage</Link>
            </div>
            <div>
              <Link to="/auth/login">AuthLogin</Link>
            </div>
            <div>
              <Link to="/auth/register">AuthRegister</Link>
            </div>
            <div>
              <Link to="/auth/educator_application">
                AuthEducatorApplication
              </Link>
            </div>
            <div>
              <Link to="/admin/dashboard">AdminDashboard</Link>
            </div>
            <div>
              <Link to="/admin/educators">AdminTeachers</Link>
            </div>
            <div>
              <Link to="/admin/users">AdminUsers</Link>
            </div>
            <div>
              <Link to="/users/dashboard">UsersDashboard</Link>
            </div>
            <div>
              <Link to="/users/edit">UsersEdit</Link>
            </div>
            <div>
              <Link to="/courses">CoursesIndex</Link>
            </div>
            <div>
              <Link to="/courses/show">CoursesShow</Link>
            </div>
            <div>
              <Link to="/courses/dasboard">CoursesDashboard</Link>
            </div>
            <div>
              <Link to="/courses/new">CoursesNew</Link>
            </div>
            <div>
              <Link to="/courses/edit">CoursesEdit</Link>
            </div>
            <div>
              <Link to="/educators/profile">EducatorsProfile</Link>
            </div>
            <div>
              <Link to="/educators/dashboard">EducatorsDashboard</Link>
            </div> */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auth/login" component={AuthLogin} />
          <Route exact path="/auth/register" component={AuthRegister} />
          <Route
            exact
            path="/auth/educator_application"
            component={AuthEducatorApplication}
          />
          <Route exact path="/admin/dashboard" component={AdminDashboard} />
          <Route exact path="/admin/educators" component={AdminTeachers} />
          <Route exact path="/admin/users" component={AdminUsers} />
          <PrivateRoute
            exact
            path="/users/dashboard"
            component={UsersDashboard}
          />
          <Route exact path="/users/edit" component={UsersEdit} />
          <Route exact path="/courses" component={CoursesIndex} />
          <Route exact path="/courses/show/:id" component={CoursesShow} />
          <Route exact path="/courses/dashboard" component={CoursesDashboard} />
          <Route exact path="/courses/index" component={CoursesIndex} />
          <Route exact path="/courses/new" component={CoursesNew} />
          <Route exact path="/courses/edit" component={CoursesEdit} />
          <Route
            exact
            path="/educators/profile"
            component={EducatorsProfile}
          />{" "}
          <Route
            exact
            path="/educators/dashboard"
            component={EducatorsDashboard}
          />{" "}
          <Route exact path="/checkout" component={Checkout} />
        </main>
        <Footer />
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(App);
