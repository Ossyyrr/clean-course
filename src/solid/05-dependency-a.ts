import { PostService } from "./05-dependency-b";
import { jsonDataBaseService } from "./05-dependency-c";
// import { LocalDataBaseService, jsonDataBaseService } from "./05-dependency-c";

// Main
(async () => {
  const postService = new PostService(new jsonDataBaseService()); // LocalDataBaseService, jsonDataBaseService

  const posts = await postService.getPosts();

  console.log({ posts });
})();
