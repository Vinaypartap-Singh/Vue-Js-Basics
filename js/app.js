const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      title: "Hello Vue JS",
    };
  },
});

app.mount("#app");
