import React, { Component } from "react";
import "./styles/styles.css";
import { BrowserRouter, Route } from "react-router-dom";
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
import CourseApplications from "./components/pages/admin/CourseApplications";
import EducatorsProfile from "./components/pages/educator/EducatorsProfile";
import EducatorsDashboard from "./components/pages/educator/EducatorsDashboard";
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import PrivateRoute from "./components/routes/PrivateRoute";
import PublicRoute from "./components/routes/PublicRoute";
import AdminRoute from "./components/routes/AdminRoute";
import EducatorOrAdminRoute from "./components/routes/EducatorOrAdminRoute";
import CheckoutRoute from "./components/routes/CheckoutRoute";
import EducatorProfileRoute from "./components/routes/EducatorProfileRoute";

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
    console.log(this.props);
    return (
      <BrowserRouter>
        <header>
          <Navbar {...this.props} />
        </header>
        <main>
          <Route exact path="/" component={LandingPage} />
          <PublicRoute exact path="/auth/login" component={AuthLogin} />
          <PublicRoute exact path="/auth/register" component={AuthRegister} />
          <PrivateRoute
            exact
            path="/auth/educator_application"
            component={AuthEducatorApplication}
          />
          <AdminRoute exact path="/admin/educators" component={AdminTeachers} />
          <AdminRoute exact path="/admin/users" component={AdminUsers} />
          <AdminRoute
            exact
            path="/admin/course-applications"
            component={CourseApplications}
          />
          <PrivateRoute
            exact
            path="/users/dashboard"
            component={UsersDashboard}
          />
          <PrivateRoute
            exact
            path="/users/edit"
            render={props => <UsersEdit {...props} />}
          />
          <Route exact path="/courses" component={CoursesIndex} />
          <Route
            exact
            path="/courses/show/:id"
            render={props => <CoursesShow {...props} />}
          />
          <Route
            exact
            path="/courses/dashboard/:id"
            render={props => <CoursesDashboard {...props} />}
          />
          <Route exact path="/courses/index" component={CoursesIndex} />
          <EducatorOrAdminRoute exact path="/courses/new" component={CoursesNew} />
          <EducatorOrAdminRoute exact path="/courses/edit/:id" component={CoursesEdit} />
          <EducatorProfileRoute
            exact
            path="/educators/profile"
            component={EducatorsProfile}
          />{" "}
          <EducatorOrAdminRoute
            exact
            path="/educators/dashboard"
            component={EducatorsDashboard}
          />{" "}
          <CheckoutRoute exact path="/checkout" component={Checkout} />
          
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
