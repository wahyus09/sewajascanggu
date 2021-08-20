const selectCollection = document.querySelectorAll(".collection");
console.log(selectCollection);

selectCollection.forEach((collection) => {
  collection.addEventListener("click", (event) => {
    console.log("select");
  });
});
