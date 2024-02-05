<template>
  <q-page class="flex flex-start">
    <div class="q-gutter-md q-mt-md full-width">
      <q-card flat>
        <q-card-section class="bg-primary">
          <div class="text-h6 text-white">
            <q-icon name="settings" class="text-white q-mr-sm" />
            Konfigurasi
          </div>
        </q-card-section>
        <q-separator />
      </q-card>
      <editor
        api-key="21sd03qzx7yvp8mqbu670i0fuibd8o3ldpr2b0g0vyaykvr1"
        :init="{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
        }"
      />
    </div>
  </q-page>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "app",
  components: {
    editor: Editor,
  },
};
</script>

<style></style>
