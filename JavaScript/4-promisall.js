async function subscribeToUpdates(userId, abortSignal) {
  const fetchOptions = { signal: abortSignal };
  try {
    const [subscriptionRes, preferenceRes, notificationRes] = await Promise.all(
      [
        fetch(`/api/subscribe/${userId}`, { method: "POST", ...fetchOptions }),
        fetch(`/api/user/${userId}/preference`, fetchOptions),
        fetch(`/api/notification/${userId}`, fetchOptions),
      ]
    );
  } catch (error) {
    if ((error.name = "AbortError")) return;
    throw error;
  }
}

const controller = new AbortController();
subscribeToUpdates(userId, controller.signal);

// Cancel if need
controller.abort();
