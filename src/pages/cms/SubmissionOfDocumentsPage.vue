<template>
  <q-page>
    <div class="row q-col-gutter-md">
      <div class="col-md-6 col-xs-12">
        <div class="q-gutter-md q-mt-md">
          <q-card flat>
            <q-card-section class="bg-primary">
              <div class="text-h6 text-white">
                <q-icon
                  name="fa-solid fa-file-circle-plus"
                  class="text-white q-mr-sm"
                />
                Pengajuan dokumen
              </div>
            </q-card-section>
            <q-separator />
            <q-form ref="inputRef" @submit="save">
              <q-card-section class="q-gutter-sm">
                <FormHelper
                  v-for="forms in formList"
                  :key="forms.id"
                  v-bind="forms"
                  v-model="input"
                />
                <q-select
                  dense
                  hide-bottom-space
                  v-model="input.gender"
                  :options="jenis_booking"
                  label="Jenis kelamin *"
                  :error="!isValid.gender"
                  @update:model-value="refreshErrorMessage('gender')"
                >
                  <template v-slot:prepend>
                    <q-icon name="fa-solid fa-venus-mars" />
                  </template>
                  <template v-slot:error>
                    <div
                      v-for="(item, index) in errorsMessage.gender"
                      :key="index"
                    >
                      {{ item }}
                    </div>
                  </template>
                </q-select>

                <q-select
                  dense
                  hide-bottom-space
                  v-model="input.type_document_id"
                  :options="options_type_document"
                  option-value="id"
                  option-label="name"
                  emit-value
                  map-options
                  label="Dokumen yang diajukan *"
                  lazy-rules
                  @update:modelValue="setVehicleId"
                  :error="!isValid.type_document_id"
                  :rules="[
                    (val) => val !== null || 'The driver field is required.',
                  ]"
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-account-tie-hat" />
                  </template>
                  <template v-slot:error>
                    <div
                      v-for="(item, index) in errorsMessage.type_document_id"
                      :key="index"
                    >
                      {{ item }}
                    </div>
                  </template>
                </q-select>

                <!-- card to show vehicle data -->
                <q-card v-if="input.vehicle_id" flat>
                  <q-card-section>
                    <div>
                      Mobil:
                      <strong
                        >{{ vehicle.plate_number }} - {{ vehicle.name }}</strong
                      >
                    </div>
                  </q-card-section>
                </q-card>
              </q-card-section>
              <q-separator />
              <q-card-section align="right" class="text-primary">
                <q-btn
                  label="Proses dokumen"
                  color="primary"
                  type="submit"
                  icon-right="send"
                  :loading="onSave"
                  unelevated
                >
                  <template v-slot:loading>
                    <q-spinner-gears />
                  </template>
                </q-btn>
              </q-card-section>
            </q-form>
          </q-card>
        </div>
      </div>
      <div class="col-md-6 col-xs-12">
        <div class="q-gutter-md q-mt-md q-mx-sm">
          <q-table
            title="Status pengajuan dokumen"
            :rows="rows"
            :columns="columns"
            row-key="id"
            :pagination="pagination"
            :loading="loading"
            :filter="filter"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, reactive } from "vue";
import FormHelper from "src/components/form/FormHelper.vue";

export default {
  components: {
    FormHelper,
  },
  setup() {
    const formList = [
      {
        id: 1,
        icon: "badge",
        label: "Nama",
        valueName: "name",
        type: "text",
        isValid: true,
        required: true,
      },
      {
        id: 2,
        icon: "people",
        label: "Umur",
        valueName: "age",
        type: "text",
        isValid: true,
        required: true,
      },
      {
        id: 3,
        icon: "fa-solid fa-id-card",
        label: "Nomor KTP",
        valueName: "ktp_number",
        type: "text",
        isValid: true,
        required: true,
      },
      {
        id: 4,
        icon: "fa-solid fa-hands-praying",
        label: "Agama",
        valueName: "religion",
        type: "text",
        isValid: true,
        required: true,
      },
      {
        id: 5,
        icon: "fa-solid fa-briefcase",
        label: "Pekerjaan",
        valueName: "job",
        type: "text",
        isValid: true,
        required: false,
      },
    ];
    const input = ref({
      name: "",
      age: "",
      no_ktp: "",
      religion: "",
      working: "",
      gender: "",
      type_document_id: "",
      vehicle_id: null,
    });

    const isValid = reactive({
      name: true,
      no_ktp: true,
      religion: true,
      gender: true,
      type_document_id: true,
    });

    const errorsMessage = reactive({
      name: [],
      no_ktp: [],
      religion: [],
      gender: [],
      type_document_id: [],
    });

    const onSave = ref(false);

    const jenis_booking = ref(["Male", "Female"]);

    const options_type_document = ref([
      { id: 1, name: "Passport" },
      { id: 2, name: "Driver's License" },
      { id: 3, name: "ID Card" },
    ]);

    const isAvailable = ref(true);

    const vehicle = reactive({
      plate_number: "ABC 123",
      name: "Toyota Camry",
    });

    const rows = ref([
      {
        id: 1,
        name: "John Doe",
        age: 30,
        no_ktp: "123456789",
        religion: "Christian",
        gender: "Male",
      },
      {
        id: 2,
        name: "Jane Doe",
        age: 25,
        no_ktp: "987654321",
        religion: "Muslim",
        gender: "Female",
      },
    ]);

    const columns = ref([
      { name: "name", label: "Name", align: "left", field: "name" },
      { name: "age", label: "Age", align: "left", field: "age" },
      {
        name: "no_ktp",
        label: "ID Card Number",
        align: "left",
        field: "no_ktp",
      },
      {
        name: "religion",
        label: "Religion",
        align: "left",
        field: "religion",
      },
      { name: "gender", label: "Gender", align: "left", field: "gender" },
    ]);

    const pagination = reactive({
      rowsPerPage: 10,
    });

    const loading = ref(false);

    const filter = ref("");

    const save = () => {
      console.log(input.value);
    };

    const refreshErrorMessage = (field) => {
      // Your error message logic here
    };

    const setVehicleId = () => {
      // Your setVehicleId logic here
    };
    return {
      loading,
      pagination,
      columns,
      rows,
      options_type_document,
      isValid,
      jenis_booking,
      isAvailable,
      input,
      formList,
      filter,
      save,
      setVehicleId,
      onSave,
      refreshErrorMessage,
    };
  },
};
</script>

<style></style>
