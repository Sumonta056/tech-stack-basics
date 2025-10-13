const url = "https://json.com";
fetch(url, {
  method: "POST",
  body: JSON.stringify({ userName: "Sumonta" }),
  headers: { "Content-Type": "application/json" },
  mode: "same-origin",
  credentials: "include",
  signal: controller.signal,
})
  .then((res) => {
    console.log(res.ok);
    console.log(res.status);
  })
  .then((data) => console.log(data));

// Basic UseCase

const basicFetchExample = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    // Check if response is ok (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse JSON response
    const data = await response.json();
    console.log("Post data:", data);
  } catch (error) {
    console.error("Fetch failed:", error);
  }
};

// 2. POST REQUEST WITH COMPLETE ERROR HANDLING
// =============================================================================
const createPost = async (postData) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer your-token-here", // Authentication
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Failed to create post: ${errorData.message}`);
    }

    const newPost = await response.json();
    return newPost;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

// 4. ABORT CONTROLLER FOR CANCELLABLE REQUESTS
// =============================================================================
const abortController = new AbortController();
const timeoutId = setTimeout(() => abortController.abort(), 5000); // 5 second timeout

const cancellableFetch = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: abortController.signal, // Allows cancellation
    });

    clearTimeout(timeoutId); // Clear timeout if request succeeds

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request was cancelled");
    } else {
      console.error("Fetch error:", error);
    }
  }
};

// 5. BATCH REQUESTS WITH PROMISE.ALL
// =============================================================================
const fetchMultiplePosts = async (postIds) => {
  try {
    // Create array of fetch promises
    const fetchPromises = postIds.map((id) =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch post ${id}`);
        return res.json();
      })
    );

    // Wait for all requests to complete
    const posts = await Promise.all(fetchPromises);
    console.log("All posts fetched:", posts);
    return posts;
  } catch (error) {
    console.error("Batch fetch failed:", error);
  }
};

// 6. RETRY MECHANISM WITH EXPONENTIAL BACKOFF
// =============================================================================
const fetchWithRetry = async (url, options = {}, maxRetries = 3) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch(url, options);

      if (response.ok) {
        return await response.json();
      }

      if (attempt === maxRetries) {
        throw new Error(`Failed after ${maxRetries} attempts`);
      }
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      // Exponential backoff: wait 1s, 2s, 4s...
      const delay = Math.pow(2, attempt - 1) * 1000;
      console.log(`Attempt ${attempt} failed, retrying in ${delay}ms...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
};
