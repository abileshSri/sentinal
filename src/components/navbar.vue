<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="sentinel-main-header">
      <span class="ml-2" style="color:white;font-size:22px;">SENTINEL</span>
      <span class="ml-5" style="color:white;font-size:15px;">Media Analysis Tool</span>
      <!-- <span class="header-line-headertext ml-3 mr-2"></span> -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form></b-nav-form>
          <!-- <span class="ml-3 mr-2 mt-4">
            <font-awesome-icon icon="bell" size="2x" style="color:white" />
          </span>-->
          <!-- <span class="header-line-headertext ml-3 mr-2 mt-3"></span> -->
          <p class="ml-2 mr-2 mt-3">
            <span class="username">User Name</span>
            <br />
            <span class="time-class">{{ new Date() | moment }}</span>
          </p>
          <b-img v-bind="mainProps" rounded="circle" alt="Profile" class="mt-4"></b-img>
          <b-nav-item-dropdown class="mr-1 text-left mt-3" right no-caret>
            <template slot="button-content">
              <span class="ml-1">
                <img src="../assets/down.png" width="9" />
              </span>
            </template>
            <b-dropdown-item @click="LogOut()">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <b-navbar class="empanel-sub-header">
      <div style="margin-left:250px;">
        <span class="mt-1 home-icon">
          <i class="material-icons cursor-pointer">home</i>
        </span>
        <span>
          <img src="../assets/Back_Arrow.svg" width="15" style="margin-bottom:5px" />
        </span>
      </div>
      <b-breadcrumb :items="breadcrumbItems" class="breadcrumb" v-if="showBreadcrumb" />
    </b-navbar>-->
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: "white",
        width: 20,
        height: 20,
        class: "m1"
      },
      breadcrumbItems: [
        { text: "", to: "" },
        { text: "", active: true }
      ],
      showBreadcrumb: false
    };
  },
  watch: {
    // $route() {
    //   this.determineBreadcrumb();
    // }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("Do MMM YYYY, h:mm a");
    }
  },
  created() {
    // this.determineBreadcrumb();
  },
  methods: {
    LogOut() {
      this.$router.push("/");
    }
    // goToBuyerDashBoad() {
    //   this.$router.push("/empanelment");
    // },z
    // getRouteMap() {
    //   if (localStorage.getItem("routeMap")) {
    //     // Code written for page refresh
    //     let json = JSON.parse(localStorage.getItem("routeMap"));
    //     json = json.filter(e => e !== "[Unknown]");
    //     let newMap = new Map(json);
    //     return newMap;
    //   } else {
    //     return new Map();
    //   }
    // },
    // addRouteMap(_currentRoute) {
    //   let _routeMap = new Map();
    //   if (localStorage.getItem("routeMap")) {
    //     // Code written for page refresh
    //     let json = JSON.parse(localStorage.getItem("routeMap"));
    //     json = json.filter(e => e !== "[Unknown]");
    //     _routeMap = new Map(json);
    //     // _routeMap = new Map(JSON.parse(localStorage.getItem("routeMap")));
    //   }
    //   console.log(_currentRoute);
    //   if (_currentRoute.hash !== ESCAPE_LOGOUT_HASH) {
    //     _routeMap.set(_currentRoute.name, _currentRoute);
    //   }
    //   console.log(_routeMap);
    //   let _routeMapArray = Array.from(_routeMap.entries());
    //   console.log(_routeMapArray);
    //   let _routeString = JSON.stringify(
    //     _routeMapArray,
    //     this.censor(_routeMapArray)
    //   );
    //   localStorage.setItem("routeMap", _routeString);
    //   // console.log(localStorage.getItem("routeMap"));
    // },
    // // Code used for breadcumbs issue
    // censor(censor) {
    //   var i = 0;
    //   return function(key, value) {
    //     if (
    //       i !== 0 &&
    //       typeof censor === "object" &&
    //       typeof value == "object" &&
    //       censor == value
    //     )
    //       return "[Circular]";
    //     if (i >= 29)
    //       // seems to be a harded maximum of 30 serialized objects?
    //       return "[Unknown]";
    //     ++i; // so we know we aren't using the original object anymore
    //     return value;
    //   };
    // },
    // clearRouteMap() {
    //   localStorage.removeItem("routeMap");
    // },
    // determineBreadcrumb() {
    //   let currentRoute = this.$route;
    //   //if parent is present, it means it is sub-route
    //   if (
    //     currentRoute.meta &&
    //     currentRoute.meta.breadcrumb &&
    //     currentRoute.meta.breadcrumb.parent
    //   ) {
    //     //look for parent route in map
    //     let parentRouteName = currentRoute.meta.breadcrumb.parent;
    //     console.log(currentRoute);
    //     if (this.getRouteMap() && this.getRouteMap().has(parentRouteName)) {
    //       let label = currentRoute.meta.breadcrumb.label;
    //       this.showBreadcrumb = true;
    //       let parentRoute = this.getRouteMap().get(parentRouteName);
    //       this.breadcrumbItems[0].text = label ? label : parentRoute.name;
    //       this.breadcrumbItems[0].to = parentRoute.path;
    //       this.breadcrumbItems[1].text = currentRoute.name;
    //     }
    //   } else {
    //     //no parent route, reset routemap
    //     this.clearRouteMap();
    //     //hide breadcrumb
    //     this.showBreadcrumb = false;
    //   }
    //   this.addRouteMap(currentRoute);
    // }
  }
};
</script>

<style scoped>
.time-class {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: right;
  color: #b3c8da;
}
.home-icon {
  color: #8aa1b5;
}
.sentinel-main-header {
  height: 60px;
  background-image: linear-gradient(to bottom, #1d76ae, #055396);
}
.empanel-sub-header {
  height: 30px;
  background-image: linear-gradient(to bottom, #14436a, #14436a);
}
.header-line-headertext {
  border: solid 0.6px #478dbb;
  width: 0px;
  color: #1d76ae;
  height: 40px;
}
.avatar-img {
  width: 25px;
  height: 25px;
  border-radius: 50% !important;
}
.username {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: right;
  color: var(--white);
}
.breadcrumb {
  position: relative;
  top: 0px;
  background-color: transparent !important;
  margin-bottom: 3px !important;
  margin-top: 3px !important;
  padding-bottom: 0 !important;
  padding: 0 !important;
}
.breadcrumb a {
  font-family: Roboto !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 14px !important;
  color: white !important;
  opacity: 0.8 !important;
}
.breadcrumb a:hover {
  text-decoration: none;
}
.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block !important;
  padding-right: 0.5rem !important;
  opacity: unset;
  text-decoration: none;
  /* content: url(../assets/Vector.png) !important; */
  /* display: none !important; */
}
.breadcrumb-item.active {
  font-family: Roboto !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 14px !important;
  /* text-transform: uppercase !important; */
  color: #9ba5bc !important;
  opacity: 0.8 !important;
}
.material-icons {
  font-size: 18px !important;
}
</style>
