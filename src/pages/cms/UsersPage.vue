<template>
  <q-page>
    <div class="q-pa-md">
      <q-table
        flat
        title="Users"
        :loading="loading"
        :rows="rows"
        :columns="columns"
        row-key="id"
        :filter="filter.search"
        v-model:pagination="pagination"
        @request="onRequest"
      >
        <template v-slot:top-left>
          <q-icon class="mobile-hide" name="people" size="2em" />
          <span class="mobile-hide">Users</span>
        </template>
        <template v-slot:top-right>
          <div
            class="q-gutter-md"
            style="display: flex; justify-content: flex-end"
          >
            <!-- search input -->
            <q-input
              outlined
              dense
              rounded
              debounce="300"
              v-model="filter.search"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
            <q-btn
              flat
              color="primary"
              label="Add New User"
              @click="dialog = !dialog"
              icon="add"
            />
          </div>
        </template>

        <template v-slot:header-cell-name="props">
          <q-th :props="props">
            <q-icon name="person" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:header-cell-email="props">
          <q-th :props="props">
            <q-icon name="mail" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:header-cell-division="props">
          <q-th :props="props">
            <q-icon name="fa-solid fa-building" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:header-cell-access="props">
          <q-th :props="props">
            <q-icon name="accessibility" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:header-cell-level="props">
          <q-th :props="props">
            <q-icon name="unfold_less" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:header-cell-action="props">
          <q-th :props="props">
            <q-icon name="touch_app" size="1.5em" />
            {{ props.col.label }}
          </q-th>
        </template>
        <template v-slot:body-cell-name="props">
          <q-td>
            <q-item-label>{{
              props.row.name ? props.row.name : "-"
            }}</q-item-label>

            <template v-for="row in props.row.roles" :key="row">
              <q-item-label caption>{{ row }}</q-item-label>
            </template>
          </q-td>
        </template>
        <template v-slot:body-cell-action="props">
          <q-td class="q-gutter-sm">
            <q-icon
              name="search"
              color="black-6"
              size="2rem"
              style="cursor: pointer"
              @click="
                detail = !detail;
                id = props.row.id;
              "
            >
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                Details
              </q-tooltip>
            </q-icon>

            <q-icon
              name="edit"
              color="blue-6"
              size="2rem"
              style="cursor: pointer"
              @click="
                showUpdate(props.row);
                id = props.row.id;
              "
            >
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                Edit
              </q-tooltip>
            </q-icon>

            <q-icon
              name="delete"
              color="red-6"
              size="2rem"
              style="cursor: pointer"
              @click="
                remove = !remove;
                id = props.row.id;
              "
            >
              <q-tooltip transition-show="rotate" transition-hide="rotate">
                Delete
              </q-tooltip>
            </q-icon>
          </q-td>
        </template>
      </q-table>
      <q-card flat class="q-mt-md">
        <q-card-actions align="right">
          <q-btn
            color="green"
            label="Export"
            icon="fa-solid fa-file-excel"
            @click="exportExcel"
          />
        </q-card-actions>
      </q-card>
      <q-dialog v-model="dialog" class="q-pa-lg w-350px" @hide="closeDialog">
        <q-card style="width: 500px; margin: auto; border: 3px solid #ffff">
          <q-card-section>
            <div class="text-h6">Add New User</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-form @submit="save">
              <q-input
                hide-bottom-space
                v-model="input.name"
                label="Full Name"
                :error="!isValid.name"
                @update:model-value="refreshErrorMessage('name')"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'The full name field is required.',
                ]"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.name" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-input
                hide-bottom-space
                v-model="input.email"
                label="Email"
                :error="!isValid.email"
                @update:model-value="refreshErrorMessage('email')"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'The email field is required.',
                ]"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.email"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-input>

              <q-select
                hide-bottom-space
                v-model="input.role"
                :options="group"
                label="Group"
                emit-value
                map-options
                :error="!isValid.role"
                @update:model-value="refreshErrorMessage('role')"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'The group field is required.',
                ]"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.role" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-select>
              <q-input
                hide-bottom-space
                v-model="input.address"
                label="Address"
                type="textarea"
                :error="!isValid.address"
                @update:model-value="refreshErrorMessage('address')"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.address"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-input
                hide-bottom-space
                v-model="input.hp1"
                type="number"
                label="Phone Number 1"
                :error="!isValid.hp1"
                @update:model-value="refreshErrorMessage('hp1')"
                oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.hp1" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-input
                hide-bottom-space
                v-model="input.hp2"
                type="number"
                label="Phone Number 2"
                :error="!isValid.hp2"
                @update:model-value="refreshErrorMessage('hp2')"
                oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.hp2" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-select
                hide-bottom-space
                v-model="input.level"
                :options="level"
                label="Level"
                emit-value
                map-options
                :error="!isValid.level"
                @update:model-value="refreshErrorMessage('level')"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'The level field is required.',
                ]"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.level"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-select>
              <q-select
                hide-bottom-space
                v-model="input.company_id"
                :options="company_id"
                label="Company"
                emit-value
                map-options
                :error="!isValid.company_id"
                @update:model-value="refreshErrorMessage('company_id')"
                :rules="[
                  (val) =>
                    (val && val.toString().trim().length > 0) ||
                    'The company field is required.',
                ]"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.company_id"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-select>
              <q-input
                hide-bottom-space
                v-model="input.division"
                label="Division"
                type="text"
                :error="!isValid.division"
                @update:model-value="refreshErrorMessage('division')"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.division"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-input>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Save" type="submit" />
                <q-btn flat label="Close" v-close-popup />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog
        v-model="dialogUpdate"
        class="q-pa-lg w-350px"
        @hide="closeDialog"
      >
        <q-card style="width: 500px; margin: auto; border: 3px solid #ffff">
          <q-card-section>
            <div class="text-h6">Edit user data</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-form @submit="update">
              <q-input
                hide-bottom-space
                v-model="input.name"
                label="Full Name"
                :error="!isValid.name"
                @update:model-value="refreshErrorMessage('name')"
                lazy-rules
                :rules="[
                  (val) =>
                    (val && val.length > 0) ||
                    'The full name field is required.',
                ]"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.name" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-input
                hide-bottom-space
                v-model="input.email"
                label="Email"
                :error="!isValid.email"
                @update:model-value="refreshErrorMessage('email')"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'The email field is required.',
                ]"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.email"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-input>

              <q-select
                hide-bottom-space
                v-model="input.role"
                :options="group"
                label="Group"
                emit-value
                map-options
                :error="!isValid.role"
                @update:model-value="refreshErrorMessage('role')"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'The group field is required.',
                ]"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.role" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-select>
              <q-input
                hide-bottom-space
                v-model="input.address"
                label="Address"
                type="textarea"
                :error="!isValid.address"
                @update:model-value="refreshErrorMessage('address')"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.address"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-input
                hide-bottom-space
                v-model="input.hp1"
                type="number"
                label="Phone Number 1"
                :error="!isValid.hp1"
                @update:model-value="refreshErrorMessage('hp1')"
                oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.hp1" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-input
                hide-bottom-space
                v-model="input.hp2"
                type="number"
                label="Phone Number 2"
                :error="!isValid.hp2"
                @update:model-value="refreshErrorMessage('hp2')"
                oninput="this.value = this.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');"
              >
                <template v-slot:error>
                  <div v-for="(item, index) in errorsMessage.hp2" :key="index">
                    {{ item }}
                  </div>
                </template>
              </q-input>
              <q-select
                hide-bottom-space
                v-model="input.level"
                :options="level"
                label="Level"
                emit-value
                map-options
                :error="!isValid.level"
                @update:model-value="refreshErrorMessage('level')"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'The level field is required.',
                ]"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.level"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-select>
              <q-select
                hide-bottom-space
                v-model="input.company_id"
                :options="company_id"
                label="Company"
                emit-value
                map-options
                :error="!isValid.company_id"
                @update:model-value="refreshErrorMessage('company_id')"
                :rules="[
                  (val) =>
                    (val && val.toString().trim().length > 0) ||
                    'The company field is required.',
                ]"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.company_id"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-select>
              <q-input
                hide-bottom-space
                v-model="input.division"
                label="Division"
                type="text"
                :error="!isValid.division"
                @update:model-value="refreshErrorMessage('division')"
              >
                <template v-slot:error>
                  <div
                    v-for="(item, index) in errorsMessage.division"
                    :key="index"
                  >
                    {{ item }}
                  </div>
                </template>
              </q-input>

              <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Save" type="submit" />
                <q-btn flat label="Close" v-close-popup />
              </q-card-actions>
            </q-form>
          </q-card-section>
        </q-card>
      </q-dialog>
      <!-- <q-dialog v-model="detail">
        <users-detail :id="id" />
      </q-dialog>
      <q-dialog v-model="remove" @hide="refresh">
        <dialog-delete :id="id" :type="type" />
      </q-dialog> -->
    </div>
  </q-page>
</template>
<script>
import {
  defineComponent,
  ref,
  onMounted,
  computed,
  onBeforeMount,
  watchEffect,
} from "vue";
import { api } from "boot/axios";
// import UsersDetail from "../components/UsersDetail.vue";
// import DialogDelete from "../components/DialogDelete.vue";
import { useQuasar } from "quasar";
import { useAuthStore } from "src/stores/auth";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "UsersPage",
  // components: { UsersDetail, DialogDelete },

  setup() {
    const auth = useAuthStore();
    const rows = ref([
      {
        id: 1,
        name: "john doe",
        email: "john.doe@mail.com",
        roles: ["superadmin"],
      },
    ]);
    const loading = ref(false);
    const id = ref("");
    const dialog = ref(false);
    const dialogUpdate = ref(false);
    const detail = ref(false);
    const company_id = ref([]);
    const remove = ref(false);
    const type = "user";
    const $q = useQuasar();
    const router = useRouter();
    const roles = ref([]);

    const saveNotif = (props) => {
      $q.notify({
        message: props,
        icon: "check_circle",
      });
    };

    const pagination = ref({
      sortBy: "name",
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });
    const filter = ref({
      search: "",
      name: "",
      plate_number: "",
      type: "",
      status: "",
    });
    const input = ref({
      name: "",
      email: "",
      address: "",
      hp1: "",
      role: "",
    });
    const save = () => {
      if (auth.token) {
        api
          .post("/api/users", input.value, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            if (res.data.success) {
              onRequest({ pagination: pagination.value });
              dialog.value = false;
              saveNotif("New user has been added");
              //reset input
              input.value = {
                name: "",
                email: "",
                role: "",
                address: "",
                hp1: null,
              };
            } else {
              alert(res.data.message);
            }
          })
          .catch((err) => {
            // if error 422 then show error message
            if (err.response.status == 422) {
              // alert(err.response.data.message);
              errorsMessage.value.name = err.response.data.errors.name;
              errorsMessage.value.email = err.response.data.errors.email;
              errorsMessage.value.address = err.response.data.errors.address;
              errorsMessage.value.hp1 = err.response.data.errors.hp1;
              errorsMessage.value.role = err.response.data.errors.role;
            }
          });
      }
    };
    const isValid = ref({
      name: computed(() => errorsMessage.value.name == null),
      email: computed(() => errorsMessage.value.email == null),
      address: computed(() => errorsMessage.value.address == null),
      hp1: computed(() => errorsMessage.value.hp1 == null),
      role: computed(() => errorsMessage.value.role == null),
    });
    const errorsMessage = ref({
      name: null,
      email: null,
      address: null,
      hp1: null,
      role: null,
    });
    const refreshErrorMessage = (props) => {
      switch (props) {
        case "name":
          errorsMessage.value.name = null;
          break;
        case "email":
          errorsMessage.value.email = null;
          break;
        case "role":
          errorsMessage.value.role = null;
          break;
        case "address":
          errorsMessage.value.address = null;
          break;
        case "hp1":
          errorsMessage.value.hp1 = null;
          break;
        default:
          errorsMessage.value.name = null;
          errorsMessage.value.email = null;
          errorsMessage.value.address = null;
          errorsMessage.value.hp1 = null;
          errorsMessage.value.role = null;
          break;
      }
    };
    const columns = [
      {
        name: "name",
        required: true,
        label: "Full Name",
        align: "left",
        field: "name",
        sortable: true,
      },
      {
        name: "email",
        align: "left",
        label: "Email",
        field: "email",
        sortable: true,
      },

      {
        name: "action",
        align: "left",
        label: "Action",
        field: "Action",
        sortable: true,
      },
    ];
    const onRequest = (config) => {
      const { page, rowsPerPage, sortBy, descending } = config.pagination;
      // loading.value = true;
      // if (auth.token) {
      //   api
      //     .get("/api/users", {
      //       headers: {
      //         Authorization: `Bearer ${auth.token}`,
      //       },
      //       params: {
      //         page,
      //         limit: rowsPerPage,
      //         sort: sortBy,
      //         order: descending ? "desc" : "asc",
      //         filter: filter.value,
      //         with: "roles",
      //       },
      //     })
      //     .then((res) => {
      //       if (filter.value.search) {
      //         watchEffect(() => {
      //           pagination.value.rowsNumber = res.data.data.total;
      //         });
      //       } else {
      //         watchEffect(() => {
      //           pagination.value.rowsNumber = res.data.data.total;
      //         });
      //       }

      //       rows.value.splice(0, rows.value.length, ...res.data.data.data);
      //       // setiap roles.value berisi ['admin', 'requestor']
      //       // maka akan di map menjadi ['Admin', 'Requestor']
      //       rows.value = rows.value.map((item) => {
      //         item.roles = item.roles.map((role) => {
      //           return role.name
      //             .split("_")
      //             .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      //             .join(" ");
      //         });
      //         return item;
      //       });
      //       pagination.value = config.pagination;
      //       loading.value = false;
      //     });
      // }
    };
    const optionSelectCompanies = () => {
      if (auth.token) {
        api
          .get("/api/companies", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: {
              select: "id,name",
            },
          })
          .then((res) => {
            company_id.value = res.data.data.map((item) => {
              return {
                label: item.name,
                value: item.id,
              };
            });
          });
      }
    };
    const refresh = () => {
      onRequest({ pagination: pagination.value });
    };

    onMounted(() => {
      refresh();
      optionSelectCompanies();
    });
    onBeforeMount(() => {
      for (let i = 0; i < auth.roles.length; i++) {
        if (auth.roles[i] !== "admin" && auth.roles[i] !== "superadmin") {
          router.push({ name: "ErrorNotFound" });
        }
      }
      // if (
      //   auth.user.company_id == null ||
      //   auth.user.division == "" ||
      //   auth.user.division == null
      // ) {
      //   //buatkan q dialog untuk mengisi company dan division
      //   $q.dialog({
      //     title: "Update Profile",
      //     message: "Please complete your profile",
      //     persistent: true,
      //     ok: {
      //       label: "Complete Profile",
      //       color: "primary",
      //     },
      //   }).onOk(() => {
      //     router.push("/change-profile");
      //   });
      // }
    });
    const showUpdate = (row) => {
      dialogUpdate.value = true;

      input.value = {
        name: row.name,
        email: row.email,
        role: row.roles,
        address: row.address,
        hp1: row.hp1,
        hp2: row.hp2,
        division: row.division,
        level: row.level,
        company_id: row.company_id,
        is_import: 0,
      };
    };
    const update = () => {
      if (auth.token) {
        api
          .put("/api/users/" + id.value, input.value, {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          })
          .then((res) => {
            if (res.data.success) {
              onRequest({ pagination: pagination.value });
              dialogUpdate.value = false;
              saveNotif(res.data.message);
              //reset input
              input.value = {
                name: "",
                email: "",
                role: "",
                address: "",
                hp1: null,
                hp2: null,
                division: "",
                company_id: "",
                level: "",
              };
            } else {
              alert(res.data.message);
            }
          })
          .catch((err) => {
            // if error 422 then show error message
            if (err.response.status == 422) {
              errorsMessage.value.name = err.response.data.errors.name;
              errorsMessage.value.email = err.response.data.errors.email;
              errorsMessage.value.address = err.response.data.errors.address;
              errorsMessage.value.hp1 = err.response.data.errors.hp1;
              errorsMessage.value.hp2 = err.response.data.errors.hp2;
              errorsMessage.value.division = err.response.data.errors.division;
              errorsMessage.value.access = err.response.data.errors.access;
              errorsMessage.value.level = err.response.data.errors.level;
              errorsMessage.value.company_id =
                err.response.data.errors.company_id;
              errorsMessage.value.role = err.response.data.errors.role;
            }
          });
      }
    };

    const exportExcel = () => {
      if (auth.token) {
        api
          .get("/api/report", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: {
              modul: "user",
              type: "excel",
            },
            responseType: "blob",
          })
          .then((res) => {
            const url = URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
              "download",
              `Users-${new Date().toLocaleDateString()}.xlsx`
            );
            document.body.appendChild(link);
            link.click();
            saveNotif("Export Excel Success");
          })
          .catch((err) => {
            // if error 422 then show error message
            if (err.response.status == 422) {
              alert(err.response.data.message);
            }
          });
      }
    };
    const closeDialog = () => {
      input.value = {
        name: "",
        email: "",
        role: "",
        address: "",
        hp1: null,
        hp2: null,
        division: "",
        company_id: "",
        level: "",
      };
      errorsMessage.value = {};
    };
    return {
      group: [
        { label: "Admin", value: "admin" },
        { label: "Requestor", value: "requestor" },
        { label: "Approver", value: "approver" },
        { label: "Super Administrator", value: "superadmin" },
      ],
      level: [
        { label: "Officer", value: "officer" },
        { label: "Spesial", value: "spesial" },
      ],

      filter,
      isPwd: ref(true),
      columns,
      rows,
      input,
      save,
      dialog,
      pagination,
      company_id,
      loading,
      onRequest,
      optionSelectCompanies,
      detail,
      dialogUpdate,
      remove,
      type,
      auth,
      exportExcel,
      isValid,
      errorsMessage,
      closeDialog,
      saveNotif,
      roles,
      refreshErrorMessage,
      id,
      showUpdate,
      update,
      refresh,
    };
  },
});
</script>
<style>
.grecaptcha-badge {
  display: none !important;
}
</style>
