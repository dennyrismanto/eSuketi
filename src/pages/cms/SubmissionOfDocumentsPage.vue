<template>
  <q-page>
    <div class="row q-col-gutter-md">
      <div class="col-md-6 col-xs-12">
        <div class="q-gutter-md q-mt-md">
          <q-card flat>
            <q-card-section class="bg-primary">
              <div class="text-h6 text-white">
                <q-icon name="users" class="text-white q-mr-sm" />
                SubmissionOfDocumentsPage
              </div>
            </q-card-section>
            <q-separator />
            <q-form ref="inputRef" @submit="save">
              <q-card-section class="q-gutter-sm">
                <q-input
                  dense
                  hide-bottom-space
                  v-model="input.name"
                  label="Nama *"
                  :error="!isValid.name"
                  @update:model-value="refreshErrorMessage('name')"
                >
                  <template v-slot:prepend>
                    <q-icon name="place" />
                  </template>
                  <template v-slot:error>
                    <div
                      v-for="(item, index) in errorsMessage.name"
                      :key="index"
                    >
                      {{ item }}
                    </div>
                  </template>
                </q-input>
                <q-input
                  hide-bottom-space
                  dense
                  v-model="input.age"
                  label="Umur *"
                >
                  <template v-slot:prepend>
                    <q-icon name="description" />
                  </template>
                </q-input>
                <q-input
                  dense
                  hide-bottom-space
                  v-model="input.no_ktp"
                  label="Nomor KTP *"
                  :error="!isValid.no_ktp"
                  @update:model-value="refreshErrorMessage('no_ktp')"
                >
                  <template v-slot:prepend>
                    <q-icon name="people" />
                  </template>
                  <template v-slot:error>
                    <div
                      v-for="(item, index) in errorsMessage.no_ktp"
                      :key="index"
                    >
                      {{ item }}
                    </div>
                  </template>
                </q-input>
                <q-input
                  dense
                  hide-bottom-space
                  v-model="input.religion"
                  label="Agama *"
                  :error="!isValid.religion"
                  @update:model-value="refreshErrorMessage('religion')"
                >
                  <template v-slot:prepend>
                    <q-icon name="email" />
                  </template>
                  <template v-slot:error>
                    <div
                      v-for="(item, index) in errorsMessage.religion"
                      :key="index"
                    >
                      {{ item }}
                    </div>
                  </template>
                </q-input>
                <q-input
                  dense
                  hide-bottom-space
                  v-model="input.working"
                  label="Pekerjaan"
                  autogrow
                >
                  <template v-slot:prepend>
                    <q-icon name="note" />
                  </template>
                </q-input>

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
                    <q-icon name="person" />
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

                <div v-if="isAvailable">
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
                          >{{ vehicle.plate_number }} -
                          {{ vehicle.name }}</strong
                        >
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
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
            title="Submission of Documents"
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

<script setup>
import { ref, reactive } from "vue";

const input = reactive({
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
  // Your save method logic here
};

const refreshErrorMessage = (field) => {
  // Your error message logic here
};

const setVehicleId = () => {
  // Your setVehicleId logic here
};
</script>

<style></style>
