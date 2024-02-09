<template>
  <div>
    <div v-if="type == 'text'">
      <q-input
        dense
        hide-bottom-space
        v-model="input[valueName]"
        :label="label + (required ? ' *' : '')"
        :error="!isValid"
        @update:model-value="refreshErrorMessage"
      >
        <template v-slot:prepend>
          <q-icon :name="icon" />
        </template>
        <template v-slot:error>
          <div v-for="(error, index) in errorMessage" :key="index">
            {{ error }}
          </div>
        </template>
      </q-input>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, computed, watch } from "vue";

export default {
  name: "FormHelper",
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
    },
    valueName: {
      type: String,
      default: "",
    },
    isValid: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const input = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });
    // const input = ref({});
    input.value[props.valueName] = props.modelValue[props.valueName]; // Initialize input object with the value of modelValue

    const refreshErrorMessage = (field) => {
      // Your error message logic here
    };
    // watch(
    //   () => props.modelValue,
    //   (val) => {
    //     input.value.label = val.label;
    //   }
    // );
    return {
      input,
      refreshErrorMessage,
    };
  },
};
</script>

<style></style>
