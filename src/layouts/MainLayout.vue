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
            <div class="cursor-pointer" @click="dashboard">
              eSuketi Applications
            </div>
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
        v-if="auth.roles[0] === 'superadmin'"
        @click="dashboard"
        active-class="active"
        :active="this.$route.path === `/dashboard`"
      >
        <q-item-section avatar>
          <q-icon name="fa-solid fa-house" />
        </q-item-section>
        <q-item-section>Dashboard</q-item-section>
      </q-item>
      <q-item
        clickable
        v-if="auth.roles[0] === 'superadmin'"
        @click="submissionOfDocuments"
        active-class="active"
        :active="this.$route.path === `/submission-of-documents`"
      >
        <q-item-section avatar>
          <q-icon name="fa-solid fa-file-circle-plus" />
        </q-item-section>
        <q-item-section>Pengajuan Berkas</q-item-section>
      </q-item>
      <q-item
        clickable
        v-if="auth.roles[0] === 'superadmin'"
        @click="statusSubmissionOfDocuments"
        active-class="active"
        :active="this.$route.path === `/status-submission-of-documents`"
      >
        <q-item-section avatar>
          <q-icon name="pending_actions" />
        </q-item-section>
        <q-item-section>Status Pengajuan Berkas</q-item-section>
      </q-item>

      <Dropdown v-for="link in dropdownLinks" :key="link.id" v-bind="link" />
      <q-item
        clickable
        v-if="auth.roles[0] === 'superadmin'"
        @click="configurations"
        active-class="active"
        :active="this.$route.path === `/configurations`"
      >
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>
        <q-item-section>Konfigurasi</q-item-section>
      </q-item>
    </q-drawer>

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
    icon: "assessment",
    name: "Master Data",
    isDown: false,
    status: ["admin", "superadmin"],
    list: [
      {
        id: 1,
        icon: "person",
        title: "Users",
        url_destination: "/users",
        status: ["admin", "superadmin"],
      },
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
      this.$router.push("/dashboard");
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
      router.push("/dashboard");
    };
    const submissionOfDocuments = () => {
      router.push("/submission-of-documents");
    };
    const statusSubmissionOfDocuments = () => {
      router.push("/status-submission-of-documents");
    };
    const configurations = () => {
      router.push("/configurations");
    };

    onMounted(() => {
      // if (auth.user === null) {
      //   router.push("/login");
      // }
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
      dashboard,
      submissionOfDocuments,
      statusSubmissionOfDocuments,
      configurations,

      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      dropdownLinks: dropdownList,
    };
  },
});
</script>
