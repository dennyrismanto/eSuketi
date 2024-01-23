<template>
  <q-item
    clickable
    v-close-popup
    :inset-level="1"
    @click="toDestination"
    active-class="active"
    :active="this.$route.path === url_destination"
    v-if="status.includes(auth.roles[0]) === true"
  >
    <q-item-section class="q-pr-md" v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "src/stores/auth";

export default defineComponent({
  name: "SidebarMenu",

  props: {
    icon: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    url_destination: {
      type: String,
      default: "",
    },
    status: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toDestination() {
      switch (this.title) {
        case "Users":
          this.$router.push("/users");
          break;
        case "Drivers":
          this.$router.push("/drivers");
          break;
        case "Vehicles":
          this.$router.push("/vehicles");
          break;
        case "Booking a car":
          this.$router.push("/booking-car");
          break;
        case "Schedules":
          this.$router.push("/schedules");
          break;
        case "Restore rejected":
          this.$router.push("/restore-rejected");
          break;
        case "Restore canceled":
          this.$router.push("/restore-canceled");
          break;

        case "My schedules":
          this.$router.push("/my-schedules");
          break;
        case "Send email to GA":
          this.$router.push("/send-email-to-ga");
          break;
        case "Daftar Antrian":
          this.$router.push("/queue-list");
          break;
        case "Approval Page":
          this.$router.push("/approval");
          break;
        case "Driver daily report":
          this.$router.push("/driver-daily-report");
          break;
      }
    },
  },
  setup() {
    const auth = useAuthStore();

    return {
      auth,
    };
  },
});
</script>
<style lang="scss" scoped>
.active {
  background: #eeeeee;
  color: $primary;
  font-weight: bold;
}
</style>
