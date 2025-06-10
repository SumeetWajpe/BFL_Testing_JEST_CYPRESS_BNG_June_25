// fetchData()

function fetchData(callback) {
  setTimeout(() => {
    const data = { name: "John Doe", age: 30 };
    callback(data);
  }, 1000);
}

test("tests for async callback", done => {
  function CallMeBack(data) {
    try {
      expect(data).toEqual({ xyz: "John Doe", age: 30 });
      done(); // successfully completed the async operation
    } catch (error) {
      console.log(error);
      done(error); // error occurred during the async operation
    }
  }

  fetchData(CallMeBack);
  //
});
