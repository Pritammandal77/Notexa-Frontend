export async function refreshAccessToken() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/refresh`, {
            method: 'POST',
            credentials: 'include',
        });

        if (res.ok) {
            console.log("Access token refreshed successfully");
            return true;
        } else {
            console.warn("Failed to refresh token");
            return false;
        }
    } catch (err) {
        console.error("Error refreshing token:", err);
        return false;
    }
}

export async function fetchWithAuth(url, options = {}) {
    const res = await fetch(
        url,
        {
            ...options,
            credentials: 'include',
        }
    );

    // If access token expired
    if (res.status === 401) {
        console.log("Access token expired, refreshing...");
        const refreshed = await refreshAccessToken();

        if (refreshed) {
            // Retry the same request after refreshing
            return fetch(url, { ...options, credentials: 'include' });
        } else {
            console.log("Refresh failed. Logging out.");
        }
    }

    return res;
}
