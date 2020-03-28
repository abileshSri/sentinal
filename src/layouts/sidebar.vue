<template>
  <div>
    <navbar
      :userName="'test'"
      @userLogout="logOut($event)"
      class="w-100 nav-bar-style"
    />
    <div class="notification-card"></div>
    <div class="expand-card">
      <div
        class="float-left"
        :class="
          expandMenu == true
            ? 'sentinal-collapse-sidebar'
            : 'sentinal-expand-sidebar'
        "
      >
        <span class="cursor-pointer" @click="triggermenu()">
          <img
            :class="expandMenu == true ? 'ml-1' : 'ml-n4'"
            src="../assets/bars-solid.svg"
          />
          <span v-if="!expandMenu" class="sentinal-sidetext ml-2"> Menu </span>
        </span>
        <div
          :class="activeSideBar(i)"
          class="side-nav mt-3 cursor-pointer"
          v-for="(data, i) in menu"
          :key="i"
          @click="navigatePage(data.name)"
        >
          <img class="mt-2" :src="getImage(data.icon)" />
          <p v-if="!expandMenu" class="sentinal-sidetext mt-2">
            {{ data.title }}
          </p>
        </div>
      </div>
    </div>
    <router-view :class="
        expandMenu == true
          ? 'sidenav-collapse'
          : 'sidenav-expand'
      " class="sidenav" />
  </div>
</template>

<script>
import navbar from "../components/navbar.vue";
export default {
  components: {
    navbar
  },
  data() {
    return {
      scrollMessages: [],
      alertPresent: true,
      messageIndex: 0,
      readMore: false,
      expandMenu: false,
      menu: [
        {
          href: "/partnerdashboard",
          name: "falconview",
          title: "Falcon View",
          icon: "falcon"
        },
        {
          href: "/partnerprofile",
          name: "trendline",
          title: "Trendline",
          icon: "trendline"
        },
        {
          href: "/partnersummary",
          name: "decible",
          title: "Decible",
          icon: "decible"
        },
        {
          href: "/partnerauctions",
          name: "deepdive",
          title: "Deep Dive",
          icon: "deepdive"
        },
        {
          href: "/partnerreminder",
          name: "masters",
          title: "Masters",
          icon: "masters"
        }
      ],
      partnerDetails: "",
      profilePicture: ""
    };
  },
  created() {},
  methods: {
    getImage(icon) {
      // var images = require.context("@/assets", false, /\.svg$/);
      return "../assets/" + icon + ".svg";
    },
    activeSideBar(i) {
      if (i == this.currentIndex) {
        return "ative-sub-children-background";
      } else {
        return "non-ative-sub-children-background";
      }
    },
    triggermenu() {
      this.expandMenu = !this.expandMenu;
    },
    navigatePage(page) {
      if (this.$route.name != page) {
        this.$router.push({
          name: page
        });
      }
    },
    onToggleCollapse() {},
    onItemClick() {}
  }
};
</script>
<style>
.notification-card {
  margin-top: 60px !important;
}
.sentinal-sidetext {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
}
.sentinal-expand-sidebar {
  position: fixed;
  top: 60px;
  left: 0px;
  width: 120px;
  height: 708px;
  margin-right: 10px !important;
  background: #e5e5e5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  opacity: 1;
}
.sentinal-collapse-sidebar {
  position: fixed;
  top: 60px;
  left: 0px;
  width: 60px;
  height: 708px;
  margin-right: 5px !important;
  background: #e5e5e5 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000033;
  opacity: 1;
}
.nav-bar-style {
  top: 0px;
  position: fixed;
  z-index: 5;
}
.sidenav-expand {
  margin-left: 120px !important;
}
.sidenav-collapse {
  margin-left: 60px !important;
}
</style>
