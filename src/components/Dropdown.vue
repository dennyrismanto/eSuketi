<template>
  <div class="q-pt-md">
    <q-expansion-item
      style="min-width: 100%"
      split
      color="orange"
      push
      glossy
      :model-value="isDown"
      no-caps
      :icon="icon"
      :label="name"
      v-if="status.includes(auth.roles[0]) === true"
    >
      <SidebarMenu v-for="link in list" :key="link.id" v-bind="link" />
    </q-expansion-item>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SidebarMenu from "../components/SidebarMenu.vue";
import { useAuthStore } from "src/stores/auth";

export default defineComponent({
  name: "DropdownMenu",

  props: {
    icon: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    status: {
      type: Array,
      default: () => [],
    },
    isDown: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    SidebarMenu,
  },

  setup() {
    const auth = useAuthStore();
    return {
      auth,
    };
  },
});
</script>
