<template>
  <q-page>
    <q-table
      flat
      ref="tableRef"
      :loading="loading"
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      v-model:pagination="pagination"
      @request="onRequest"
    >
      <template v-slot:top>
        <div class="table__title">
          <q-icon name="mdi-calendar" size="1.5em" />
          My Schedules
        </div>
        <q-space />
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter.search"
          placeholder="Search"
          outlined
          rounded
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body-cell-cars_and_drivers="props">
        <q-td
          clickable
          class="cursor-pointer"
          @click="
            detail = true;
            id = props.row.id;
          "
        >
          <q-item-label>{{
            props.row.driver ? props.row.driver.name : "-"
          }}</q-item-label>
          <q-item-label caption>{{
            props.row.vehicle ? props.row.vehicle.name : "-"
          }}</q-item-label>
        </q-td>
      </template>
      <template v-slot:body-cell-date_time="props">
        <q-td
          clickable
          class="cursor-pointer"
          @click="
            detail = true;
            id = props.row.id;
          "
        >
          <!--
          - tampilkan leave_at dan back_at
          - tambahkan icon untuk menunjukkan arah perjalanan
          jika tanggalnya sama, maka tampilkan jamnya saja.
          contoh: 10 Desember 2022<br>10:00 - 12:00
          jika tanggalnya berbeda, maka tampilkan tanggal dan jamnya.
          contoh: 10 Desember 2022<br>10:00 - 12 Desember 2022: 12:00

          gunakan date.formatDate(props.row.leave_at, "D MMMM YYYY HH:mm")
          gunakan date.formatDate(props.row.back_at, "D MMMM YYYY HH:mm")
        -->
          <div
            v-if="
              date.formatDate(props.row.leave_at, 'D MMMM YYYY') ===
              date.formatDate(props.row.back_at, 'D MMMM YYYY')
            "
          >
            {{ date.formatDate(props.row.leave_at, "D MMM YYYY") }}
            <br />{{ date.formatDate(props.row.leave_at, "HH:mm") }} -
            {{ date.formatDate(props.row.back_at, "HH:mm") }}
          </div>
          <div v-else>
            <q-icon name="arrow_forward" size="1.5em" />
            {{ date.formatDate(props.row.leave_at, "D MMM YYYY HH:mm") }}<br />
            <q-icon name="arrow_back" size="1.5em" />
            {{ date.formatDate(props.row.back_at, "D MMM YYYY HH:mm") }}
          </div>
        </q-td>
      </template>
      <template v-slot:header-cell-destination="props">
        <q-th :props="props">
          <q-icon name="place" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
      <template v-slot:header-cell-cars_and_drivers="props">
        <q-th :props="props">
          <q-icon name="mdi-account-tie-hat" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
      <template v-slot:header-cell-reason="props">
        <q-th :props="props">
          <q-icon name="announcement" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
      <template v-slot:header-cell-date_time="props">
        <q-th :props="props">
          <q-icon name="event" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
      <template v-slot:body-cell-order_status="props">
        <q-td>
          <div
            class="q-pa-sm bg-green-8 text-white rounded-borders text-center"
            v-if="props.row.status === 1 && props.row.is_canceled == 0"
          >
            Approved
          </div>
          <div
            class="q-pa-sm bg-yellow-8 text-white rounded-borders text-center"
            v-if="props.row.status === 0 && props.row.is_canceled == 0"
          >
            Pending
          </div>
          <div
            class="q-pa-sm bg-red-8 text-white rounded-borders text-center"
            v-if="props.row.status === -1 && props.row.is_canceled == 0"
          >
            Rejected
          </div>
          <div
            class="q-pa-sm bg-grey-8 text-white rounded-borders text-center"
            v-if="props.row.is_canceled == 1"
          >
            Canceled
          </div>
        </q-td>
      </template>
      <template v-slot:header-cell-action="props">
        <q-th :props="props">
          <q-icon name="touch_app" size="1.5em" />
          {{ props.col.label }}
        </q-th>
      </template>
      <template v-slot:body-cell-action="props">
        <q-td>
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
            name="event_busy"
            color="black-6"
            size="2rem"
            style="cursor: pointer"
            v-if="props.row.is_canceled === 0 && props.row.status === 0"
            @click="
              cancel = !cancel;
              id = props.row.id;
            "
          >
            <q-tooltip transition-show="rotate" transition-hide="rotate">
              Cancel Schedule
            </q-tooltip>
          </q-icon>
        </q-td>
      </template>
    </q-table>

    <!-- export button -->
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

    <q-dialog v-model="detail">
      <schedule-detail :id="id" />
    </q-dialog>
    <q-dialog v-model="cancel" class="q-pa-lg w-350px">
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm text-h6"
            >Are you sure want to cancel this schedule?</span
          >
        </q-card-section>

        <q-item-section class="row wrap q-mx-lg">
          <q-form ref="inputRef">
            <q-input
              type="text"
              label="Reason"
              v-model="inputReason.reason"
              :rules="[(val) => !!val || 'The reason field is required']"
            />
          </q-form>
        </q-item-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn label="Reject" color="primary" @click="onCancelSchedule" />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- <q-dialog v-model="cancel">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="warning" text-color="white" />
          <span class="q-ml-sm text-bold"
            >Are you sure want to cancel this schedule?</span
          >
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Apply"
            color="primary"
            v-close-popup
            @click="onCancelSchedule"
          />
        </q-card-actions>
      </q-card>
    </q-dialog> -->
  </q-page>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeMount,
  watchEffect,
} from "vue";
import { useAuthStore } from "src/stores/auth";
import { api } from "boot/axios";
import ScheduleDetail from "../components/ScheduleDetail.vue";
import { useQuasar, date } from "quasar";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "MySchedule",
  components: { ScheduleDetail },

  setup() {
    const auth = useAuthStore();
    const loading = ref(false);
    const detail = ref(false);
    const cancel = ref(false);
    const id = ref("");
    const selected = ref([]);
    const $q = useQuasar();
    const router = useRouter();
    const tableRef = ref();
    const inputRef = ref(null);

    const input = ref({
      name: "",
      car_type: "",
      car_color: "",
      years: "",
      level: "",
      plate_number: "",
    });

    const save = () => {
      rows.value.push(input.value);
      input.value = {};
    };
    const rows = ref([]);
    const columns = [
      {
        name: "destination",
        align: "left",
        label: "Destination",
        field: "destination",
      },
      {
        name: "cars_and_drivers",
        align: "left",
        label: "Vehicle and Driver",
        field: "cars_and_drivers",
      },
      {
        name: "reason",
        align: "left",
        label: "Reason",
        field: "reason",
      },
      {
        name: "date_time",
        align: "left",
        label: "Schedule",
        field: "leave_at",
      },
      {
        name: "order_status",
        align: "left",
        label: "Order Status",
        field: "order_status",
      },
      {
        name: "action",
        align: "left",
        label: "Action",
        field: "action",
      },
    ];
    const detail_columns = [
      {
        name: "schedule",
        required: true,
        label: "Schedule",
        align: "left",
        field: "schedule",
      },
      {
        name: "cars",
        align: "left",
        label: "Vehicle",
        field: "cars",
      },
      {
        name: "drivers",
        align: "left",
        label: "Driver",
        field: "drivers",
      },
    ];
    let pagination = ref({
      sortBy: "leave_at",
      descending: true,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });
    let filter = ref({
      search: "",
    });

    const onRequest = (config) => {
      let { page, rowsPerPage, sortBy, descending } = config.pagination;

      loading.value = true;
      if (auth.token) {
        api
          .get("/api/reservations", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: {
              page,
              user_id: "me",
              with: "user,vehicle,driver",
              limit: rowsPerPage,
              sort: sortBy,
              order: descending ? "desc" : "asc",
              filter: filter.value,
            },
          })
          .then((res) => {
            if (filter.value.search) {
              watchEffect(() => {
                pagination.value.rowsNumber = res.data.data.total;
              });
            } else {
              watchEffect(() => {
                pagination.value.rowsNumber = res.data.data.total;
              });
            }
            rows.value.splice(0, rows.value.length, ...res.data.data.data);

            pagination.value = config.pagination;
            loading.value = false;
          });
      }
    };
    onMounted(() => {
      onRequest({ pagination: pagination.value });
    });
    onBeforeMount(() => {
      for (let i = 0; i < auth.roles.length; i++) {
        if (
          auth.roles[i] !== "admin" &&
          auth.roles[i] !== "approver" &&
          auth.roles[i] !== "requestor" &&
          auth.roles[i] !== "superadmin"
        ) {
          router.push({ name: "ErrorNotFound" });
        }
      }
      if (
        auth.user.company_id == null ||
        auth.user.division == "" ||
        auth.user.division == null
      ) {
        //buatkan q dialog untuk mengisi company dan division
        $q.dialog({
          title: "Update Profile",
          message: "Please complete your profile",
          persistent: true,
          ok: {
            label: "Complete Profile",
            color: "primary",
          },
        }).onOk(() => {
          router.push("/change-profile");
        });
      }
    });
    const exportExcel = () => {
      if (auth.token) {
        api
          .get("/api/report", {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
            params: {
              modul: "reservation",
              type: "excel",
              user_id: auth.user.id,
            },
            responseType: "blob",
          })
          .then((res) => {
            const url = URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute(
              "download",
              `My-Reports-${new Date().toLocaleDateString()}.xlsx`
            );
            document.body.appendChild(link);
            link.click();
            bringNotify("Export Excel Success");
          })
          .catch((err) => {
            // if error 422 then show error message
            if (err.response.status == 422) {
              alert(err.response.data.message);
            }
          });
      }
    };
    const onCancelSchedule = async () => {
      $q.loading.show();
      const valid = await inputRef.value.validate();
      if (valid) {
        if (auth.token) {
          api
            .post(
              "/api/approval/",
              {
                id: id.value,
                type: "cancel",
                user_id: auth.user.id,
                reason: inputReason.value.reason,
              },
              {
                headers: {
                  Authorization: `Bearer ${auth.token}`,
                },
              }
            )
            .then((res) => {
              $q.loading.hide();
              onRequest({ pagination: pagination.value });
              bringNotify(res.data.message);
              cancel.value = false;
            })
            .catch((err) => {
              // if error 422 then show error message
              if (err.response.status == 422) {
                alert(err.response.data.message);
              }
            });
        }
      }
    };
    let inputReason = ref({
      reason: "",
    });
    const bringNotify = (props) => {
      $q.notify({
        message: props,
        icon: "check_circle",
      });
    };
    return {
      date,
      selected,
      filter,
      columns,
      rows,
      detail,
      id,
      detail_columns,
      loading,
      auth,
      exportExcel,
      pagination,
      onRequest,
      input,
      cancel,
      onCancelSchedule,
      bringNotify,
      save,
      tableRef,
      inputReason,
      inputRef,
    };
  },
});
</script>

<style>
.grecaptcha-badge {
  display: none !important;
}
</style>
