<template>
  <div class="modal fade" id="postFormModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Add Visit to {{ selectedCountry?.countryName || "Unknown Country" }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="visitDate" class="form-label">Visit Year</label>
              <input
                type="number"
                v-model="form.yearVisited"
                class="form-control"
                id="visitDate"
                min="1900"
                max="2099"
                required
                placeholder="Enter year"
              />
            </div>
            <div class="mb-3">
              <label for="rating" class="form-label">Rating</label>
              <input
                type="number"
                v-model="form.rating"
                class="form-control"
                id="rating"
                min="1"
                max="5"
                required
              />
            </div>
            <div class="mb-3">
              <label for="note" class="form-label">Notes</label>
              <textarea
                v-model="form.notes"
                class="form-control"
                id="note"
                rows="3"
                required
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="imageURL" class="form-label">Image URL</label>
              <textarea
                v-model="form.imageURL"
                class="form-control"
                id="imageURL"
                rows="1"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal()"
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="submitForm">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import * as bootstrap from "bootstrap";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

// Tar emot land som props
const props = defineProps({
  selectedCountry: {
    type: Object,
    default: null,
  },
});

const form = ref({
  yearVisited: "",
  rating: 1,
  notes: "",
  imageURL: "",
});

// Toast när användaren har lagt till plats
const notify = () => {
  toast.success("New visit added successfully!", {
    autoClose: 2000,
  });
};

// POST anrop
const submitForm = async () => {
  if (!props.selectedCountry) {
    alert("Välj ett land först.");
    return;
  }

  try {
    await axios.post("http://localhost:3000/api/placesVisited", {
      yearVisited: form.value.yearVisited,
      rating: form.value.rating,
      notes: form.value.notes,
      userId: 1,
      countryId: props.selectedCountry.countryId,
      imageURL: form.value.imageURL,
    });
    resetForm();
    closeModal();
    notify();
    location.reload();
  } catch (error) {
    console.error("Error adding place:", error);
    toast.error("Failed to save the visit. Try again later.", {
      autoClose: 3000,
      theme: "colored",
      icon: "⚠️",
      position: "bottom-right",
    });
  }
};

// Återställr formuläret
const resetForm = () => {
  form.value.yearVisited = "";
  form.value.rating = 1;
  form.value.notes = "";
  form.value.imageURL = "";
};

// Stänga modalen
const closeModal = () => {
  const modal = document.getElementById("postFormModal");
  if (modal) {
    const modalInstance =
      bootstrap.Modal.getInstance(modal) || new bootstrap.Modal(modal);
    modalInstance.hide();
  }
  resetForm();
};
</script>

<style>
input.form-control,
textarea.form-control {
  border: 2px solid black;
}
</style>
