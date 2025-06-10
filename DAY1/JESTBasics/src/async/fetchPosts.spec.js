const posts = require("./fetchPosts");

describe("test suite for tesing async code with promise", () => {
  it("test for async promise fetchPosts returns", () => {
    var mockResult = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    var thePromise = posts.fetchPosts();
    return thePromise.then(postsResult => {
      //   expect(postsResult.data.length).toBe(100);
      expect(postsResult.data[0]).toEqual(mockResult);
    });
  });

  //   it("test for async promise fetchPosts returns with async/await", async () => {
  //     var mockResult = {
  //       userId: 1,
  //       id: 1,
  //       title:
  //         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //     };
  //     var postsResult = await posts.fetchPosts();
  //     expect(postsResult.data[0]).toEqual(mockResult);
  //   });

  // JEST

  //   it("tests async code using promise with methods given by JEST", () => {
  //     var mockResult = {
  //       userId: 1,
  //       id: 1,
  //       title:
  //         "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  //       body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  //     };
  //     return expect(posts.fetchPostWithId(1)).resolves.toEqual(mockResult);
  //   });

  // OR

  fit("tests async code using promise with methods given by JEST", async () => {
    var mockResult = {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    };
    await expect(posts.fetchPostWithId(1)).resolves.toEqual(mockResult);
  });
});
