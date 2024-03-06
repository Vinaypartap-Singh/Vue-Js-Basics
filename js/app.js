const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      showBook: true,
      books: [
        {
          title: "Rich Dad Poor Dad",
          author: "Robert Kiyosaki",
          url: "https://www.amazon.com/Rich-Dad-Poor-Teach-Middle/dp/1612680194",
          isFav: true,
        },
        {
          title: "The Alchemist",
          author: "Paulo Coelho",
          url: "https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005",
        },
      ],
    };
  },
  //   Methods are used to perform some action on the data
  methods: {
    changeTitle(title) {
      // we use this keyword to access the data properties
      //   this.title = "Rich Dad Poor Dad";
      this.title = title;
    },
    toggleShowBook() {
      this.showBook = !this.showBook;
    },
    handleOver(e, data) {
      console.log(e.target, data);
    },
    addToFav(book) {
      book.isFav = !book.isFav;
    },
  },
});

app.mount("#app");
