<template>
  <q-layout view="lHr LpR lFr">
    <q-header reveal class="bg-secondary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <div class="row justify-start items-center">
            <img
              class="q-mt-sm q-mb-sm q-mr-sm cursor-pointer"
              src="../assets/images/logo_bekasi.png"
              style="width: 75px"
              @click="dashboard"
            />
            <div class="cursor-pointer" @click="dashboard">CMS eSuketi</div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left">
      <!-- drawer content -->

      <div class="column justify-center items-center q-mt-md q-pa-md">
        <q-avatar
          class="row justify-center items-center"
          size="80px"
          font-size="30px"
          color="teal"
          text-color="white"
        >
          {{ initialName }}
        </q-avatar>
        <div class="text-h6 q-mt-sm text-capitalize">
          {{ auth.user.name }}
        </div>
        <div class="text-subtitle2 text-capitalize">
          <p v-if="auth.roles[0] === 'superadmin'">super administrator</p>
          <p v-if="auth.roles[0] === 'admin'">admin</p>
          <p v-if="auth.roles[0] === 'approver'">approver</p>
          <p v-if="auth.roles[0] === 'requestor'">requestor</p>
        </div>

        <!-- btn group, change profile and logout, left right -->
        <div class="row justify-center items-center q-mt-md">
          <q-btn
            flat
            size="sm"
            icon="settings"
            class="q-mr-sm"
            color="primary"
            label="Change Profile"
            @click="toDestination"
          />
          <q-btn
            flat
            size="sm"
            icon="logout"
            class="q-ml-sm"
            color="negative"
            label="Logout"
            @click="logout"
          />
        </div>
      </div>
      <q-separator />

      <q-item
        clickable
        v-if="auth.roles[0] === 'approver' || auth.roles[0] === 'superadmin'"
        @click="approver"
        active-class="active"
        :active="this.$route.path === `/approval`"
      >
        <q-item-section avatar>
          <q-icon name="assignment_turned_in" />
        </q-item-section>
        <q-item-section>Approver Page</q-item-section>
      </q-item>
      <q-item
        clickable
        v-if="auth.roles[0] === 'requestor'"
        @click="bookingcar"
        active-class="active"
        :active="this.$route.path === `/booking-car`"
      >
        <q-item-section avatar>
          <q-icon name="directions_car" />
        </q-item-section>
        <q-item-section>Booking a car</q-item-section>
      </q-item>
      <q-item
        clickable
        v-if="auth.roles[0] === 'requestor'"
        @click="schedules"
        active-class="active"
        :active="this.$route.path === `/schedules`"
      >
        <q-item-section avatar>
          <q-icon name="today" />
        </q-item-section>
        <q-item-section>Schedules</q-item-section>
      </q-item>
      <q-item
        clickable
        v-if="auth.roles[0] === 'requestor'"
        @click="myschedules"
        active-class="active"
        :active="this.$route.path === `/my-schedules`"
      >
        <q-item-section avatar>
          <q-icon name="schedule" />
        </q-item-section>
        <q-item-section>My Schedules</q-item-section>
      </q-item>

      <Dropdown v-for="link in dropdownLinks" :key="link.id" v-bind="link" />
    </q-drawer>

    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Dropdown from "../components/Dropdown.vue";
import { useAuthStore } from "src/stores/auth";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";

const dropdownList = [
  {
    id: 1,
    icon: "loupe",
    name: "Booking",
    isDown: true,
    status: ["approver", "admin", "superadmin"],
    list: [
      {
        id: 1,
        icon: "directions_car",
        title: "Booking a car",
        url_destination: "/booking-car",
        status: ["approver", "admin", "superadmin"],
      },
      {
        id: 2,
        icon: "today",
        title: "Schedules",
        url_destination: "/schedules",
        status: ["approver", "admin", "superadmin"],
      },
      {
        id: 3,
        icon: "schedule",
        title: "My schedules",
        url_destination: "/my-schedules",
        status: ["approver", "admin", "superadmin"],
      },
      {
        id: 4,
        icon: "report",
        title: "Driver daily report",
        url_destination: "/driver-daily-report",
        status: ["approver", "superadmin"],
      },
      {
        id: 5,
        icon: "restore_from_trash",
        title: "Restore rejected",
        url_destination: "/restore-rejected",
        status: ["approver", "superadmin"],
      },
      {
        id: 6,
        icon: "restore",
        title: "Restore canceled",
        url_destination: "/restore-canceled",
        status: ["approver", "superadmin"],
      },
      // {
      //   id: 7,
      //   icon: "email",
      //   title: "Send email to GA",
      //   url_destination: "/send-email-to-ga",
      //   status: ["requestor", "admin", "superadmin"],
      // },
    ],
  },
  {
    id: 2,
    icon: "assessment",
    name: "Master",
    isDown: false,
    status: ["admin", "superadmin"],
    list: [
      {
        id: 1,
        icon: "directions_car",
        title: "Vehicles",
        url_destination: "/vehicles",
        status: ["admin", "superadmin"],
      },
      {
        id: 2,
        icon: "mdi-account-tie-hat",
        title: "Drivers",
        url_destination: "/drivers",
        status: ["admin", "superadmin"],
      },
      {
        id: 3,
        icon: "person",
        title: "Users",
        url_destination: "/users",
        status: ["admin", "superadmin"],
      },
      // {
      //   id: 4,
      //   icon: "settings",
      //   title: "Configs",
      //   url_destination: "/configs",
      //   status: ["admin", "superadmin"],
      // },
    ],
  },
];

export default defineComponent({
  name: "MainLayout",
  components: {
    Dropdown,
  },
  methods: {
    toDestination() {
      this.$router.push("change-profile");
    },
  },
  beforeMount() {
    //get condition if auth user empty route to login
    this.currentURL = this.$route.path;
    if (this.currentURL === "/") {
      this.$router.push("/booking-car");
    }
  },

  setup() {
    const $q = useQuasar();
    const auth = useAuthStore();
    const router = useRouter();
    const leftDrawerOpen = ref(false);

    const name = ref("");
    const splitName = ref([]);
    const initialName = ref("");

    const logout = () => {
      // dialog
      $q.dialog({
        title: "Logout",
        message: "Are you sure you want to logout?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        router.push("/login").then(() => {
          window.location.reload();
          auth.$reset();
        });
      });
    };
    const dashboard = () => {
      router.push("/booking-car");
    };
    const approver = () => {
      router.push("/approval");
    };
    const bookingcar = () => {
      router.push("/booking-car");
    };
    const myschedules = () => {
      router.push("/my-schedules");
    };
    const schedules = () => {
      router.push("/schedules");
    };
    onMounted(() => {
      if (auth.user === null) {
        router.push("/login");
      }
      name.value = auth.user.name;
      splitName.value = name.value.split(" ");
      initialName.value =
        splitName.value[0].charAt(0) +
        (splitName.value[1] ? splitName.value[1].charAt(0) : "");
    });

    return {
      leftDrawerOpen,
      Dropdown,
      logout,
      auth,
      name,
      splitName,
      initialName,
      approver,
      bookingcar,
      myschedules,
      schedules,
      dashboard,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      dropdownLinks: dropdownList,
    };
  },
});
</script>
