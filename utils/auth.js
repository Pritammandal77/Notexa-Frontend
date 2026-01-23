export async function refreshAccessToken() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/refresh`, {
            method: 'POST',
            credentials: 'include', // important: send cookies
        });

        if (res.ok) {
            console.log("Access token refreshed successfully");
            return true;
        } else {
            console.warn("❌ Failed to refresh token");
            return false;
        }
    } catch (err) {
        console.error("Error refreshing token:", err);
        return false;
    }
}

export async function fetchWithAuth(url, options = {}) {
    const res = await fetch(url, {
        ...options,
        credentials: 'include', // send cookies
    });

    // If access token expired
    if (res.status === 401) {
        console.log("Access token expired, refreshing...");
        const refreshed = await refreshAccessToken();

        if (refreshed) {
            // Retry the same request after refreshing
            return fetch(url, { ...options, credentials: 'include' });
        } else {
            // Refresh failed — redirect to login
            console.log("Refresh failed. Logging out.");
            // window.location.href = '/login';
        }
    }

    return res;
}
