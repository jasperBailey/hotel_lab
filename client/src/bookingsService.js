const baseURL = "http://localhost:9000/api/bookings/";

export const getBookings = () => {
    return fetch(baseURL).then((result) => result.json());
};

export const getBooking = (id) => {
    return fetch(baseURL + id).then((result) => result.json());
};

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    })
        .then((res) => res.json())
        .then((id) => {
            return {
                ...id,
                ...payload,
            };
        });
};

export const deleteBooking = (id) => {
    return fetch(baseURL + id, { method: "DELETE" });
};

export const putBooking = (id, payload) => {
    return fetch(baseURL + id, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
    } );
};
